import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Input, Button } from 'react-native-elements';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

export default function GreenPointUpload1(props) {
    const { navigation } = props;
    const [adress, setAdress] = useState("");
    const [latitude, setLatitude] = useState(-34.54708679);
    const [longitude, setLongitude] = useState(-58.46839172);
    const [isCorrectAdress, setCorrectAdress] = useState(false);

    let mapRegion = {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.03
    };

    let marker = {
        title: "Combate de los pozos",
        description: "Punto Verde",
        latlng: {
            latitude: latitude,
            longitude: longitude
        },
        image: require('../../../assets/img/icon-map-green-point.png'),

    }


    Geocoder.init("AIzaSyAxQ-LvUJ7WjltAwaRCbW082l_P1texlCo");

    function searchAdress() {

        Geocoder.from(adress)
            .then(json => {

                let location = json.results[0].geometry.location;
                setLatitude(location.lat);
                setLongitude(location.lng);
                setCorrectAdress(true);

            })
            .catch(error => console.warn(error));
    }



    return (
        <View>
            <View style={styles.containerSearch}>
                <Input
                    placeholder='Ingresá el domicilio'
                    placeholderTextColor={'#49AD26'}
                    onChangeText={(text) => (setAdress(text))}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}
                />
                <Button
                    title="Buscar"
                    onPress={() => searchAdress()}
                    buttonStyle={styles.buttonSearchStyle}
                    containerStyle={styles.buttonSearchContainerStyle}
                    titleStyle={styles.buttonSearchTitleStyle}
                />
            </View>


            <View>
                <MapView
                    style={styles.mapStyle}
                    region={mapRegion}
                    provider={PROVIDER_GOOGLE}
                    tracksViewChanges={false}

                >
                    <Marker
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                        image={marker.image}
                    >

                    </Marker>
                </MapView>

            </View>

            {
                isCorrectAdress ? <View style={styles.containerNextStyle}>
                    <Text style={styles.question}>¿Es realmente tu ubicacion?</Text>

                    <Button
                        title="Si"
                        onPress={() => navigation.navigate('GreenPointUpload2')}
                        buttonStyle={styles.buttonNextStyle}
                        containerStyle={styles.buttonNextContainerStyle}
                        titleStyle={styles.buttonNextTitleStyle}
                    />

                </View> : <View></View>
            }



        </View>
    )
}

const styles = StyleSheet.create({
    containerSearch:{
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
    },
    mapStyle: {
        margin: 10,
        borderWidth: 1,
        borderColor: "#49AD26",
        borderRadius: 10,
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').height / 2,
    },

    inputContainerStyle:{
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "white",
        padding: 10,
        borderWidth: 2,
        borderColor: "#49AD26",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 2,

    },
    inputStyle:{
     textAlign: "center",
     color: "#49AD26",
    },
    buttonSearchStyle: {
        backgroundColor: "#49AD26",
        borderRadius: 0,
        height: Dimensions.get('window').height * 0.05,
        width: Dimensions.get('window').width * 0.3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    buttonSearchContainerStyle: {
        marginTop: 5,
    },
    buttonSearchTitleStyle: {
        fontSize: 16,
        color: "white",

    },
    containerNextStyle:{
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    question:{
        textAlign: "center",
        fontSize: 16,
    },
    buttonNextContainerStyle:{
        marginTop: 10,
    },
    buttonNextStyle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#49AD26"
    }
});