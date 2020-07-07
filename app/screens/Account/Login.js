import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text, Image, AsyncStorage, Alert } from 'react-native';
import { Divider, Button, Input } from 'react-native-elements';

import { firebaseApp } from '../../utils/firebase';
import firebase from "firebase/app";
import { decode, encode } from 'base-64'
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }
import "firebase/firestore";

import LottieView from "lottie-react-native";


const db = firebase.firestore(firebaseApp);

export default function Login(props) {
    const { navigation } = props;

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [logged, setLogged] = useState(false);

    useEffect(() => {

    }, []);

    return (
        <ScrollView>
            {logged ? <Logeanding/> :
                <View>
                    <Text style={styles.title}>GrowApp</Text>
                    <View style={styles.imgContainer}>
                        <LottieView
                            source={require('../../../assets/tree.json')}
                            autoPlay
                            style={{ width: 180, height: 180 }}
                            resizeMode="cover"
                            loop={false}
                        />
                    </View>
                    <View style={styles.viewContainer}>
                        <Input
                            placeholder='Ingresa tu email'
                            onChangeText={(text) => setUserName(text.toLowerCase())}
                            containerStyle={styles.input}
                            inputContainerStyle={styles.inputContainerStyle}
                            inputStyle={styles.inputStyle}
                            labelStyle={{ color: "#A6CB12" }}
                            placeholderTextColor={"#A6CB12"}
                        />
                        <Input
                            placeholder='Ingresa tu contraseña'
                            onChangeText={(text) => setPassword(text.toLowerCase())}
                            containerStyle={styles.input}
                            inputContainerStyle={styles.inputContainerStyle}
                            inputStyle={styles.inputStyle}
                            labelStyle={{ color: "#A6CB12" }}
                            placeholderTextColor={"#A6CB12"}
                            secureTextEntry={true}
                        />

                        <Button
                            title="Iniciar Sesión"
                            onPress={() => loginAccount()}
                            buttonStyle={styles.requestButtonStyle}
                        />
                        <CreateAccount navigation={navigation} />

                    </View>
                </View>
            }

        </ScrollView>

    );

    async function loginAccount() {
        setLogged(true);
        let user = db.collection("user");
        let query = user.where('email', '==', userName)
            .where('password', '==', password)
            .get()
            .then((snapshot) => {
                if (snapshot.empty) {
                    setLogged(false);
                    Alert.alert("Usuario o contraseña incorrectos");
                } else {
                    snapshot.forEach(doc => {
                        AsyncStorage.setItem("user", JSON.stringify(doc.data()));
                        navigation.navigate("Home")
                    });
                }

            })
    }
}

function Logeanding() {
    return (
        <View style={styles.loading}>
            <LottieView
                source={require('../../../assets/tree.json')}
                autoPlay
                style={{ width: 180, height: 180 }}
                resizeMode="cover"
                loop={false}
            />
            <Text style={styles.title}>GrowApp</Text>
            <Text style={{fontSize: 15}}>Cargando ....</Text>
        </View>
    )
}

function CreateAccount(props) {
    const { navigation } = props;

    return (
        <View>
            <Divider style={styles.divider} />
            <Text style={styles.textRegister}>
                ¿Todavía no tenes cuenta? {" "}
                <Text
                    style={styles.btnRegister}
                    onPress={() => navigation.navigate("Register")}
                >
                    Registrate
            </Text>
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        height: 150,
        marginTop: 20
    },
    title: {
        marginTop: 50,
        textAlign: 'center',
        fontSize: 50,
        color: "#A6CB12",
        fontWeight: "bold",
    },
    viewContainer: {
        marginLeft: 20,
        marginRight: 20,
        alignContent: "center",
        alignItems: "center",
    },
    imgContainer: {
        alignContent: "center",
        alignItems: "center",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
    },
    divider: {
        backgroundColor: "#A6CB12",
        margin: 40
    },
    btnRegister: {
        color: "#A6CB12",
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        width: "100%",

    },
    inputStyle: {
        textAlign: "center",
        color: "#A6CB12",
    },
    inputContainerStyle: {
        borderColor: "#A6CB12",
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
    },
    requestButtonStyle: {
        marginTop: 30,
        backgroundColor: "#E00543",
        width: 300,
        height: 60,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    loading:{
        marginTop: "30%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
    }
})