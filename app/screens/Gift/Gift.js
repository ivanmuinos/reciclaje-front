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
                                            <Text style={styles.points}> {det.points} Hojas</Text>
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
        name: 'Set de 4 tuppers',
        description: 'Ejemplo de descripción del producto',
        points: '3000',
        image: require('../../../assets/img/04-premios-tupper.jpg'),
    },
    {
        name: 'Set de 3 tuppers',
        description: 'Ejemplo de descripción del producto',
        points: '2800',
        image: require('../../../assets/img/05-premios-tupper2.jpg'),
    },
    {
        name: 'Termo ECO',
        description: 'Ejemplo de descripción del producto',
        points: '2300',
        image: require('../../../assets/img/08-premios-termomadera.jpg'),
    },
    {
        name: 'Botella grande',
        description: 'Ejemplo de descripción del producto',
        points: '2000',
        image: require('../../../assets/img/01-premios-botella.jpg'),
    },
    {
        name: 'Botella chica',
        description: 'Ejemplo de descripción del producto',
        points: '1900',
        image: require('../../../assets/img/02-premios-botellamini.jpg'),
    },
    {
        name: 'Vaso térmico madera Eco',
        description: 'Ejemplo de descripción del producto',
        points: '1500',
        image: require('../../../assets/img/09-premios-vasotermicomadera.jpg'),
    },
	{
        name: 'Vaso térmico plástico',
        description: 'Ejemplo de descripción del producto',
        points: '1200',
        image: require('../../../assets/img/03-premios-vasotermico.jpg'),
    },
    {
        name: 'Cubiertos con estuche',
        description: 'Ejemplo de descripción del producto',
        points: '1000',
        image: require('../../../assets/img/12-premios-cubiertos.png'),
    },
    {
        name: 'Vasos de madera Eco',
        description: 'Ejemplo de descripción del producto',
        points: '900',
        image: require('../../../assets/img/07-premios-vasosmadera.jpg'),
    },	
    {
        name: 'Sorbetes metálicos',
        description: 'Ejemplo de descripción del producto',
        points: '500',
        image: require('../../../assets/img/13-premios-bombillas.png'),
    },
    {
        name: 'Cepillo de dientes madera Eco',
        description: 'Ejemplo de descripción del producto',
        points: '500',
        image:  require('../../../assets/img/06-premios-cepillos.jpg'),
       
    },
    {
        name: 'Semillas Orgánicas',
        description: 'Ejemplo de descripción del producto',
        points: '500',
        image: require('../../../assets/img/10-premios-semillasorganicas.png')
    },
    {
        name: 'Pulsera metálica reciclada',
        description: 'Ejemplo de descripción del producto',
        points: '300',
        image: require('../../../assets/img/15-premios-bijou.png'),
    },
    {
        name: 'Lampara reciclada',
        description: 'Ejemplo de descripción del producto',
        points: '250',
        image: require('../../../assets/img/16-premios-reci.png'),
    },	
    {
        name: 'Lapicero reciclado',
        description: 'Ejemplo de descripción del producto',
        points: '100',
        image: require('../../../assets/img/14-premios-lapicero.png'),
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