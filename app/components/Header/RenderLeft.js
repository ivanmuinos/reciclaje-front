import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import { Image } from 'react-native-elements';

//firebase
import { firebaseApp } from '../../utils/firebase';
import firebase from "firebase/app";
import { decode, encode } from 'base-64'
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);
//

const width = 30;
const height = 30;

export default function RenderLeft(props) {


    const [visible, setVisible] = useState(false);

    const [user, setUser] = useState({});

    useEffect(() => {

        const navigationWillFocusListener = props.navigation.navigation.addListener('willFocus', () => {
            getItem('user');
        })
        getItem('user');
        return () => navigationWillFocusListener()

    }, []);

    return (
        <View style={styles.containerLeftHeader}>
            <View style={styles.img}>
               {renderPoints(user.points)}
            </View>
            <View >
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.hello}>Hola</Text>
                    <Text style={styles.name}>{user.name}!</Text>
                </View>
            </View>
        </View>

    )

    async function getItem(key) {
        const value = await AsyncStorage.getItem(key).then((userRef) => {
            let user = JSON.parse(userRef);

            let userQuery = db.collection("user");
            let query = userQuery.where('email', '==', user.email)
                .where('password', '==', user.password)
                .get()
                .then((snapshot) => {
                    if (snapshot.empty) {
                        Alert.alert("Usuario o contraseña incorrectos");
                    } else {
                        snapshot.forEach(doc => {
                            setUser(doc.data());
                        });
                    }

                })
        });

    }
}



function renderPoints(points) {
    if (points < 500) return (<Image source={require('../../../assets/img/brote-icon.png')}
        resizeMode="cover"
        style={{ width: width, height: height }}
    />
    )
    if (points >= 500 && points < 1000) return (<Image source={require('../../../assets/img/arbusto-icon.png')}
        resizeMode="cover"
        style={{ width: width, height: height }}
    />
    );
    if (points >= 1000 && points < 2000) return (<Image source={require('../../../assets/img/arbol-icon.png')}
        resizeMode="cover"
        style={{ width: width, height: height }}
    />
    );
    if (points >= 2000) return (<Image source={require('../../../assets/img/bosque-icon.png')}
        resizeMode="cover"
        style={{ width: width, height: height }}
    />
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 80,
        backgroundColor: "white",
    },
    containerLeftHeader: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    img: {
        borderRadius: 35,
        borderWidth: 2,
        padding: 12,
        borderColor: "white",
        backgroundColor: "#E8FFCD",
    },
    hello: {
        marginTop: "15%",
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 20,
        color: "gray",
    },
    name: {
        marginTop: "15%",
        marginLeft: 5,
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    points: {
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        padding: 10,
        borderColor: "white",
        marginRight: 20,
    }

})