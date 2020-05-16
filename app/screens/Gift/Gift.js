import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useNavigationParam } from '@react-navigation/native';

export default function Gift(props) {
    const { navigation } = props;

    return (
        <ScrollView contentContainerStyle={{ justifyContent: 'center', flexDirection: 'row', flex: 1 }}>
            <View>
                {
                    detail.map((det, i) => {
                        return (
                            <TouchableOpacity key={i} 
                                              onPress={() => navigation.navigate('GiftDetail', {
                                                  name: det.name,
                                                  description: det.description,
                                                  points: det.points
                                              })}
                                              
                                              
                            >
                                <Card key={i} title={det.name}
                                    containerStyle={styles.card}
                                >

                                    <View key={i}>
                                        <Image
                                            resizeMode="cover"
                                        />
                                        <Text>{det.description}</Text>
                                        <Text>Puntos: {det.points}</Text>
                                       
                                    </View>

                                </Card>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        </ScrollView>
    );
}


const detail = [
    {
        name: 'Premio 1',
        description: 'descripcion del producto 1',
        points: '400'
    },
    {
        name: 'Premio 2',
        description: 'descripcion del producto 2',
        points: '800'
    },
    {
        name: 'Premio 3',
        description: 'descripcion del producto 3',
        points: '1200'
    },

]

const styles = StyleSheet.create({
    card: {


    }
})