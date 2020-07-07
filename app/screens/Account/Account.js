import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Image, Dimensions, AsyncStorage } from 'react-native';
import { List, ListItem, FlatList, Avatar, Divider, Overlay } from 'react-native-elements';
import ModalPointsLvl from './ModalPointsLvl';


//firebase
import { firebaseApp } from '../../utils/firebase';
import firebase from "firebase/app";
import { decode, encode } from 'base-64'
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);
//

const dimensions = Dimensions.get('window');
const overlayHeight = Math.round(dimensions.width * 24 / 16);
const overlayWidth = dimensions.width * 0.8;

export default function Account(props) {
    const { navigation } = props;

    const [visible, setVisible] = useState(false);

    const [user, setUser] = useState({});



    useEffect(() => {

        const navigationWillFocusListener = props.navigation.addListener('willFocus', () => {
            getItem('user');
        })
        getItem('user');
        return () => navigationWillFocusListener()


    }, []);



    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View style={styles.view}>
            <View style={styles.avatarView}>
                <Text style={styles.welcome}>Hola {user.name}!</Text>
                <Text>Te damos la bienvenida a Grow</Text>

                <Text style={{ fontSize: 20, margin: 15, fontWeight: 'bold', color: "gray" }}>Nivel: Árbol</Text>
                <TouchableOpacity
                    style={styles.pointsContainer}
                    onPress={toggleOverlay}
                >
                    {renderPoints(user.points)}
                    <Text style={styles.points}>{user.points} Hojas</Text>
                </TouchableOpacity>

                <Overlay
                    isVisible={visible}
                    onBackdropPress={toggleOverlay}
                    overlayStyle={{ width: overlayWidth, height: overlayHeight, backgroundColor: "#f2f2f2", borderRadius: 10 }}

                >
                    <ModalPointsLvl />
                </Overlay>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: "gray", margin: 10 }} >Siguiente nivel: Bosque</Text>
            </View>


            <View style={styles.list}>
                {
                    list.map((item, i) => (
                        <TouchableOpacity key={i}>
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={{ name: item.icon }}
                                bottomDivider
                                chevron
                                onPress={() => handleButtonList(item)}
                            />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>

    )

    function handleButtonList(item) {
        AsyncStorage.removeItem('user');
        navigation.navigate(item.screen);
    }

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



const list = [
    {
        title: 'Datos del perfil',
        icon: 'settings',
        screen: 'GreenPointUpload1',
    },
    {
        title: 'Cargar Punto Verde',
        icon: 'room',
        screen: 'GreenPointUpload1',
    },
    {
        title: 'Cargar Take Away',
        icon: 'store',
        screen: 'TakeAwayUpload1',
    },
    {
        title: 'Cerrar sesion',
        icon: 'store',
        screen: 'Login'
    }
]

const styles = StyleSheet.create({
    pointsContainer: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white",
        padding: 10,
        borderRadius: 100,
        height: 150,
        width: 150,
        marginBottom: 10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 1,

    },
    welcome: {
        fontSize: 30,
        marginTop: 20,
        textAlign: "center",
    },
    points: {
        marginBottom: 15,
        fontSize: 17,
        width: "100%",
        textAlign: "center",
        padding: 10,
        color: "black",
    },
    avatarView: {
        width: "100%",
        alignItems: 'center',
        backgroundColor: "white",



    },
    avatar: {
        marginTop: 15,
        marginBottom: 15,

    },
    list: {
        margin: 15,
        marginTop: 20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    }


})