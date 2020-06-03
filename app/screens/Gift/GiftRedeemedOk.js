import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default function GiftRedeemedOk({ navigation, route }) {
    const { name, description, points, image } = navigation.state.params;
    const result = 1200 - points;
    return (
        <View>
        <View style={styles.headerContainer}>
            <Text style={styles.congrats}>¡Felicidades!</Text>
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
            
            <Text style={{fontSize: 20}}>Detalle:</Text>
            <Text style={{fontSize: 15, marginTop: 5, color: "gray" }}>{name}</Text>
            <Text style={{fontSize: 15, marginTop: 5, color: "gray"}}>{description}</Text>
        </View>
            <Text style={{fontSize: 30, textAlign: "center", marginTop: 30}}>Te quedan: {result} hojas</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    headerContainer:{
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
    congrats:{
        fontSize: 50,
        textAlign: "center",
        color: "#49AD26"
    },
    imageContainer:{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 25,
    },
    descriptionOk:{
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5,
        color: "black",
    }
})