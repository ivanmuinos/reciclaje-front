import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default function Gift() {
        return (
            <ScrollView>
                <Card title="CARD WITH DIVIDER"
                      containerStyle={styles.card}
                >
                        {
                            users.map((u, i) => {
                            return (
                                <View key={i}>
                                    <Image
                                        resizeMode="cover"
                                    />
                                    <Text>{u.name}</Text>
                                </View>
                            );
                            })
                        }
                </Card>
                <Card title="CARD WITH DIVIDER"
                      containerStyle={styles.card}
                >
                        {
                            users.map((u, i) => {
                            return (
                                <View key={i}>
                                    <Image
                                        resizeMode="cover"
                                    />
                                    <Text>{u.name}</Text>
                                </View>
                            );
                            })
                        }
                </Card>   
            </ScrollView>
        ); 
}


const users = [
    {
       name: 'brynn',
       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },

   ]

const styles = StyleSheet.create({
    card: {
        width: "50%",
        flex: 1
    }
})