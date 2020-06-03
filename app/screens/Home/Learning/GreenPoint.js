import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, ScrollView, View, Text, Dimensions } from 'react-native';
import { Icon, Card, Button, Image } from 'react-native-elements';
import { WebView } from "react-native-webview";
import ImagePreview from 'react-native-image-preview';

export default function Recycle(props) {
    const [visible, setVisibleToFalse] = useState(false);
    const [source, setSource] = useState("");

    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 9 / 16);
    const imageWidth = dimensions.width * 0.9;

     console.log(source);
    return (
        <ScrollView
            contentContainerStyle={{ backgroundColor: "#45BD3D" }}>

            <View style={styles.container}>
                <Text style={styles.learningText}>¿Qué es un punto verde?</Text>
                <View style={styles.containerInfo}>
                    <WebView
                        style={{ width: imageWidth, height: 170 }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{ uri: "https://www.youtube.com/embed/NVE1zh-DZ9A" }}
                    />
                </View>
            </View>
           
            <View style={styles.container}>
                <Text style={styles.learningText}>Punto verde</Text>
                <View style={styles.containerInfo}>
                    <TouchableOpacity
                        onPress={() => { setVisibleToFalse(true), setSource(punto_verde) }}
                    >
                        <Image
                            source={{uri: punto_verde}}
                            style={{ width: imageWidth, height: 170 }}
                        />
                    </TouchableOpacity>
                   
                </View>
            </View>
            
            <View style={styles.container}>
                <Text style={styles.learningText}>Punto verde especial</Text>
                <View style={styles.containerInfo}>
                <TouchableOpacity
                        onPress={() => { setVisibleToFalse(true), setSource(punto_verde_especial) }}
                    >
                        <Image
                            source={{uri: punto_verde_especial}}
                            style={{ width: imageWidth, height: 180 }}
                        />
                    </TouchableOpacity>
                    
                </View>
            </View>

            <ImagePreview visible={visible} source={{uri: source}} close={setVisibleToFalse} />
        </ScrollView>
    );
}

const punto_verde = 'https://i.ibb.co/6mj75BV/greenpoint-1.jpg'
const punto_verde_especial = 'https://i.ibb.co/V38S9s5/greenpoint-2.jpg' 

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: "white",
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,

    },
    containerInfo: {
        marginTop: 10,
        padding: 8,
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    learningText: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5,

    },
});