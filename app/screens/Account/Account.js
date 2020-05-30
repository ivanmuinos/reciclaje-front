import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { List, ListItem, FlatList, Avatar, Divider } from 'react-native-elements';


export default function Account() {
    return (
        <View style={styles.view}>
            <View style={styles.avatarView}>
                <Text style={styles.welcome}>Hola {user.name}!</Text>
                <Text>Te damos la bienvenida a Reciclapp</Text>
                <Avatar
                    size="xlarge"
                    source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={styles.avatar}

                />

                <Text style={styles.points}>{user.points} puntos</Text>
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
                            />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>

    )
}


const user = {
    name: 'Julieta',
    points: '1200'

}

const list = [
    {
        title: 'Datos del perfil',
        icon: 'settings'
    },
    {
        title: 'Historial',
        icon: 'sync'
    },
    {
        title: 'Logros',
        icon: 'school'
    }
]

const styles = StyleSheet.create({
    view: {


    },
    welcome: {
        fontSize: 30,
        marginTop: 20,
        textAlign: "center",
    },
    points: {
        marginBottom: 15,
        fontSize: 20,
        width: "100%",
        textAlign: "center",
        padding: 10,
        color: "black",
    },
    avatarView: {
        width: "100%",
        alignItems: 'center',
        backgroundColor: "white"
    


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