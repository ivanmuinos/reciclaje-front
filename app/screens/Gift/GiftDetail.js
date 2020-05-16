import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default function GiftDetail({ navigation, route }) {
    
    const { name, description, points } = navigation.state.params;

    
    return (
        <View>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <Text>{points}</Text>
            <Button 
                title="Canjear"
                onPress={ () => { navigation.navigate('GiftRedeemedOk', {
                    name,
                    description,
                    points
                })}}
            />
        </View>
    )


}

const styles = StyleSheet.create({

})