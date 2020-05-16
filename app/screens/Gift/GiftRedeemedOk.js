import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default function GiftRedeemedOk({navigation, route}){
    const { name, description, points } = navigation.state.params;

    return (
        <View>
            <Text>Su canje fue realizado correctamente!</Text>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <Text>{points}</Text>
        </View>
    )
}