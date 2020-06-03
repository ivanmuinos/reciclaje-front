import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements'

export default function GiftDetail({ navigation, route }) {

    const { name, description, points, image } = navigation.state.params;
    console.log(image);

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
                    <Text style={{fontSize: 18, color: "gray"}}>Descripción del producto: </Text>
                    <Text style={{fontSize: 15, marginTop: 5}}>{description}</Text>
                </View>


                <Button
                    title="Canjear"
                    onPress={() => {
                        navigation.navigate('GiftRedeemedOk', {
                            name,
                            description,
                            points,
                            image
                        })
                    }}
                    buttonStyle={styles.button}
                />
            </View>
        </ScrollView>
    )


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
    button:{
        backgroundColor: "#49AD26",
        borderRadius: 5,
        height: 40
    }
})