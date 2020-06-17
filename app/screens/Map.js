import React, { useState, useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { CheckBox, Image, Icon } from 'react-native-elements'
import { green } from 'color-name';
import _ from 'lodash';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
            image: require('../../assets/img/icon-map-green-point.png'),
            latlng: {
                latitude: -34.56722639,
                longitude: -58.46530947,
            }
        },
        {
            title: "Plaza Leandro N. Alem",
            description: "Punto Verde",
            status: greenPointCheck,
            image: require('../../assets/img/icon-map-green-point.png'),
            latlng: {
                latitude: -34.57631328,
                longitude: -58.50388387,
            }
        },
        {
            title: "Plaza Balcarce",
            description: "Punto Verde",
            status: greenPointCheck,
            image: require('../../assets/img/icon-map-green-point.png'),
            latlng: {
                latitude: -34.54708679,
                longitude: -58.46839172,
            }
        },
        {
            title: "Plaza Armenia",
            description: "Punto Verde",
            status: greenPointCheck,
            image: require('../../assets/img/icon-map-green-point.png'),
            latlng: {
                latitude: -34.58921874,
                longitude: -58.42494508,
            }
        },
        {
            title: "Rotisería",
            description: "Take-Away",
            status: takeAwayCheck,
            image: require('../../assets/img/icon-map-take-away.png'),
            latlng: {
                latitude: -34.54708679,
                longitude: -58.45839172,
            }
        },
        {
            title: "Comida al peso",
            description: "Take-Away",
            status: takeAwayCheck,
            image: require('../../assets/img/icon-map-take-away.png'),
            latlng: {
                latitude: -34.54708679,
                longitude: -58.47839172,
            }
        },
        {
            title: "Comida casera para llevar",
            description: "Take-Away",
            status: takeAwayCheck,
            image: require('../../assets/img/icon-map-take-away.png'),
            latlng: {
                latitude: -34.54708679,
                longitude: -58.48839172,
            }
        },


    ]


    console.log(markers);

    return (
        <View>
            <View style={styles.checkboxContainer}>
                <View style={styles.containerFilterButtons}>
                    <TouchableOpacity
                        onPress={() => { setGreenPointCheck(!greenPointCheck) }}
                        style={styles.filterButton}
                    >
                        {
                            greenPointCheck ? <Image
                                source={require('../../assets/img/button-checked-greenpoint.png')}
                                style={{ width: 50, height: 50 }}
                            /> : <Image
                                    source={require('../../assets/img/button-unchecked-greenpoint.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                        }
                    </TouchableOpacity>
                    <Text>Puntos Verdes</Text>
                </View>
                <View style={styles.containerFilterButtons}>
                    <TouchableOpacity
                        style={styles.filterButton}
                        onPress={() => { setTakeAwayCheck(!takeAwayCheck) }}
                    >
                          {
                            takeAwayCheck ? <Image
                                source={require('../../assets/img/button-checked-takeaway.png')}
                                style={{ width: 50, height: 50 }}
                            /> : <Image
                                    source={require('../../assets/img/button-unchecked-takeaway.png')}
                                    style={{ width: 50, height: 50 }}
                                />
                        }
                    </TouchableOpacity>
                    <Text>Take-Away</Text>
                </View>

            </View>
            <View>
                <MapView
                    style={styles.mapStyle}
                    region={mapRegion}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation={true}


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
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        width: "55%",
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    containerFilterButtons: {
        marginRight: 5,
        marginLeft: 5,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
    },
    filterButton: {
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    }
});
