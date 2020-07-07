import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements'

export default function PointsObtained(props) {

    
    const { points } = props.navigation.state.params;

    return (
        <ScrollView>
            <Text>Obtuviste {points} puntos</Text>
            <Text></Text>
        </ScrollView>
    )

}

const styles = StyleSheet.create({

})