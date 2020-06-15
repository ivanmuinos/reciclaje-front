import React, { useState, useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { CheckBox, Image } from 'react-native-elements'
import { green } from 'color-name';
import _ from 'lodash';

export default function Map() {

    const [greenPointCheck, setGreenPointCheck] = useState(true);
    const [takeAwayCheck, setTakeAwayCheck] = useState(true);


    const mapRegion = {
        latitude: -34.54708679,
        longitude: -58.46839172,
        latitudeDelta: 0.05,
        longitudeDelta: 0.03
    };

    let markers = [
        {
            title: "Plaza Castelli",
            description: "Punto Verde",
            status: greenPointCheck,
            image: require('../../assets/img/icon-take-away.png'),
            latlng: {
                latitude: -34.56722639,
                longitude: -58.46530947,
            }
        },
        {
            title: "Plaza armenia",
            description: "Punto Verde",
            status: takeAwayCheck,
            image: require('../../assets/img/icon-take-away.png'),
            latlng: {
                latitude: -34.54708679,
                longitude: -58.46839172,
            }
        },

    ]


    console.log(markers);

    return (

        <View>
            <View style={styles.checkboxContainer}>
                <CheckBox
                    title='Puntos verdes'
                    checked={greenPointCheck}
                    onPress={() => checkGreenPoint()}
                />
                <CheckBox
                    title='Take away'
                    checked={takeAwayCheck}
                    onPress={() => { setTakeAwayCheck(!takeAwayCheck) }}
                />
            </View>
            <View>
                <MapView
                    style={styles.mapStyle}
                    region={mapRegion}
                    provider={PROVIDER_GOOGLE}

                >
                    {markers.filter(marker => marker.status === true).map((marker, i) => (
                        <Marker
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                            key={i} 
                            image={marker.image}
                            >
                            
                        </Marker>
                    ))}


                </MapView>

            </View>
        </View>

    );

    function checkGreenPoint() {

        setGreenPointCheck(!greenPointCheck);

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {

        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    checkboxContainer: {
        flexDirection: 'row',

    }
});