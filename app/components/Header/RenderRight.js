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


export default function RenderRight(props) {


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
            <View style={styles.points}>
                <Image
                    source={require('../../../assets/img/leaf-icon.png')}
                    style={{ width: 30, height: 30 }}
                />
                <Text style={{ fontSize: 16, fontWeight: "bold", color: "#A6CB12" }}>{user.points}</Text>
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
        style={{ width: 70, height: 70 }}
    />
    )
    if (points >= 500 && points < 1000) return (<Image source={require('../../../assets/img/arbusto-icon.png')}
        resizeMode="cover"
        style={{ width: 70, height: 70 }}
    />
    );
    if (points >= 1000 && points < 2000) return (<Image source={require('../../../assets/img/arbol-icon.png')}
        resizeMode="cover"
        style={{ width: 70, height: 70 }}
    />
    );
    if (points >= 2000) return (<Image source={require('../../../assets/img/bosque-icon.png')}
        resizeMode="cover"
        style={{ width: 70, height: 70 }}
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
        backgroundColor: "white",
    },
    hello: {
        marginTop: "15%",
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 20,
        color: "#f2f2f2",
    },
    name: {
        marginTop: "15%",
        marginLeft: 5,
        fontSize: 20,
        fontWeight: "bold",
        color: "#A6CB12",
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