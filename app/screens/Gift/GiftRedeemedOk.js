import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default function GiftRedeemedOk({ navigation, route }) {

    const { name, description, points, image } = navigation.state.params;

    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.congrats}>¡Felicitaciones!</Text>
                <View style={styles.imageContainer}>
                    <Image
                        source={image}
                        resizeMode="contain"
                        style={styles.image}
                    />
                </View>
                <Text style={styles.descriptionOk}>Tu canje fue realizado correctamente!</Text>
            </View>
            <View style={styles.container}>

                <Text style={{ fontSize: 20 }}>Detalle:</Text>
                <Text style={{ fontSize: 15, marginTop: 5, color: "gray" }}>{name}</Text>
                <Text style={{ fontSize: 15, marginTop: 5, color: "gray" }}>{description}</Text>
            </View>

        </View>
    )
}



const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 15,
    },
    container: {
        backgroundColor: "white",
        margin: 20,
        padding: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    congrats: {
        fontSize: 50,
        textAlign: "center",
        color: "#A6CB12",
        fontWeight: "bold",
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 25,
    },
    descriptionOk: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5,
        color: "black",
    },
    image: {
        width: "100%",
        height: 120
    }
})