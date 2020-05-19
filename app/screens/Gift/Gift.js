import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { SearchBar, Card, ListItem, Button, Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useNavigationParam } from '@react-navigation/native';

export default function Gift(props) {
    const { navigation } = props;
    const [search, updateSearch] = useState("");

    return (

        <ScrollView>
            <SearchBar
                placeholder="Buscar..."
                value={search}
                containerStyle={styles.searchContainer}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
            />

            <View style={styles.view}>
                {
                    detail.map((det, i) => {
                        return (
                            <View style={styles.containerCard} key={i}>
                                <TouchableOpacity key={i}
                                    onPress={() => navigation.navigate('GiftDetail', {
                                        name: det.name,
                                        description: det.description,
                                        points: det.points,
                                        image: det.image,
                                    })}
                                >
                                    <Card key={i} 
                                        containerStyle={styles.card}
                                    >
                                        <View key={i}>
                                            <Image
                                                source={det.image}
                                                resizeMode="cover"
                                                style={{ width: "100%", height: 120 }}
                                            />
                                            <Text style={styles.productTitle}>{det.name}</Text>
                                            <Text style={styles.points}> {det.points} Puntos</Text>
                                        </View>

                                    </Card>
                                </TouchableOpacity>
                            </View>
                        );
                    })
                }
            </View>

        </ScrollView>

    );
}


const detail = [
    {
        name: 'Botellas Plásticas',
        description: 'Ejemplo de descripción del producto',
        points: '400',
        image: require('../../../assets/img/image-30.png'),
    },
    {
        name: 'Set de tuppers',
        description: 'Ejemplo de descripción del producto',
        points: '500',
        image: require('../../../assets/img/image-31.png'),
    },
    {
        name: 'Tupper Circular',
        description: 'Ejemplo de descripción del producto',
        points: '450',
        image: require('../../../assets/img/image-32.png'),
    },
    {
        name: 'Velador metálico',
        description: 'Ejemplo de descripción del producto',
        points: '1200',
        image: require('../../../assets/img/image-33.png'),
    },
    {
        name: 'Lámpara bidón',
        description: 'Ejemplo de descripción del producto',
        points: '650',
        image: require('../../../assets/img/image-36.png'),
    },
    {
        name: 'Lámpara botella',
        description: 'Ejemplo de descripción del producto',
        points: '650',
        image: require('../../../assets/img/image-37.png'),
    },
    {
        name: 'Cubiertos con estuche',
        description: 'Ejemplo de descripción del producto',
        points: '1200',
        image: require('../../../assets/img/image-38.png'),
    },
    {
        name: 'Sorbetes metálicos',
        description: 'Ejemplo de descripción del producto',
        points: '1200',
        image: require('../../../assets/img/image-39.png'),
    },
    {
        name: 'Maceta reciclada',
        description: 'Ejemplo de descripción del producto',
        points: '1200',
        image:  require('../../../assets/img/image-54.png'),
       
    },
    {
        name: 'Cesto de cartón',
        description: 'Ejemplo de descripción del producto',
        points: '120',
        image: require('../../../assets/img/image-53.png')
    },
    {
        name: 'Pulsera metálica',
        description: 'Ejemplo de descripción del producto',
        points: '1200',
        image: require('../../../assets/img/image-55.png'),
    },
    {
        name: 'Premio 3',
        description: 'Ejemplo de descripción del producto',
        points: '1200',
        image: require('../../../assets/img/image-56.png'),
    },

]

const styles = StyleSheet.create({
    searchContainer: {
        margin: 8,
        borderRadius: 15,
        backgroundColor: "white",
        borderTopColor: "white",
        borderBottomColor: "white",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    inputContainerStyle: {
        backgroundColor: "white",
    },
    inputStyle: {
        backgroundColor: "white",
    },
    view: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    containerCard: {
    
        width: '50%',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    card: {
        
        borderRadius: 10,
        margin: 8
    },
    productTitle:{
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
        color: "#268F5C",
        marginTop: 15,
     
    },
    points:{
        fontSize: 15,
        marginTop: 10,
        textAlign: "center",
        fontWeight: "bold",
        color: "#4E4E4E",
    }
})