import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, AsyncStorage, Alert } from 'react-native';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements'

//firebase
import { firebaseApp } from '../../utils/firebase';
import firebase from "firebase/app";
import { decode, encode } from 'base-64'
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }
import "firebase/firestore";
//

const db = firebase.firestore(firebaseApp);

export default function GiftDetail({ navigation, route }) {

    const { name, description, points, image } = navigation.state.params;

    const [userEmail, setUserEmail] = useState();
    const [userPass, setUserPass] = useState();

    const [userPoints, setUserPoints] = useState();

    useEffect(() => {
        getItem('user');
    }, []);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image
                    source={image}
                    resizeMode="contain"
                    style={styles.image}
                />
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.change}>0 canjeados</Text>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.points}>{points} Hojas</Text>
                <View style={styles.descriptionContainer}>
                    <Text style={{ fontSize: 18, color: "gray" }}>Descripción del producto: </Text>
                    <Text style={{ fontSize: 15, marginTop: 5 }}>{description}</Text>
                </View>


                <Button
                    title="Canjear"
                    onPress={() => { giftRedeemedOk() }}
                    buttonStyle={styles.button}
                />
            </View>
        </ScrollView>
    )

    async function getItem(key) {
        const value = await AsyncStorage.getItem(key).then((userRef) => {
            let user = JSON.parse(userRef);

            setUserEmail(user.email);
            setUserPass(user.password);

            let userQuery = db.collection("user");
            let query = userQuery.where('email', '==', user.email)
                .where('password', '==', user.password)
                .get()
                .then((snapshot) => {
                    if (snapshot.empty) {
                        Alert.alert("Usuario o contraseña incorrectos");
                    } else {
                        snapshot.forEach(doc => {
                            console.log(doc.data());
                            setUserPoints(doc.data().points);
                        });
                    }

                })
        });



    }

    function giftRedeemedOk() {
        let userPointsInt = parseInt(userPoints);
        let giftPoints = parseInt(points);
        let calc = userPointsInt - giftPoints;

        if (calc < 0) {
            Alert.alert("Te faltan mas hojas para poder canjear este premio :(")
        } else {
            let userRef = db.collection("user");
            let query = userRef.where('email', '==', userEmail)
                .where('password', '==', userPass)
                .get()
                .then((snapshot) => {
                    if (snapshot.empty) {
                        setLogged(false);
                        Alert.alert("Usuario o contraseña incorrectos");
                    } else {
                        snapshot.forEach(doc => {
                            db.collection("user").doc(doc.id).update({ points: calc });
                            navigation.navigate('GiftRedeemedOk', {
                                name,
                                description,
                                points,
                                image
                            })
                        });
                    }
                })
        }
    }
}

const styles = StyleSheet.create({
    detailContainer: {

    },
    image: {
        height: 200,
        width: 200,
        alignItems: "center"
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "white",
        padding: 25,

    },
    detailContainer: {
        margin: 10
    },
    change: {
        color: "gray"
    },
    title: {
        marginTop: 5,
        fontSize: 35,
    },
    points: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#49AD26",
        marginTop: 5,
    },
    descriptionContainer: {
        backgroundColor: "white",
        marginTop: 15,
        marginBottom: 15,
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    button: {
        backgroundColor: "#49AD26",
        borderRadius: 5,
        height: 40
    }
})