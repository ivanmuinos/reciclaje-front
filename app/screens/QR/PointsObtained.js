import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements'

export default function PointsObtained(props) {


    const { points } = props.navigation.state.params;

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/img/enviroment.png')}
                resizeMode="cover"
                style={{ width: "100%", height: 350 }}
            />
            <Text style={styles.thanks}>Gracias por cuidar nuestro planeta</Text>
            <Text style={styles.points}>Obtuviste {points} hojas</Text>
            <Text style={styles.growApp}>Equipo GrowApp</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',

    },

    points: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: "bold",
        color: '#A6CB12',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: '#A6CB12',
        width: 300,
        textAlign: 'center',

    },

    growApp: {
        marginTop: 20,

    },

    thanks: {
        fontSize: 24,
    }



})