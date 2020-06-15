import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, ScrollView, View, Text, Dimensions } from 'react-native';
import { Icon, Card, Button, Image } from 'react-native-elements';
import { WebView } from "react-native-webview";

export default function Enviroment(props) {

    const dimensions = Dimensions.get('window');
    const imageWidth = dimensions.width * 0.9;

    return (
        <ScrollView
            contentContainerStyle={{ backgroundColor: "#45BD3D" }}>

            <View style={styles.container}>
                <Text style={styles.learningText}>El recorrido de los materiales reciclables</Text>
                <View style={styles.containerInfo}>
                    <WebView
                        style={{ width: imageWidth, height: 170 }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        allowsFullscreenVideo={true}
                        source={{ uri: "https://www.youtube.com/embed/iIwYnz7a2VE" }}
                    />
                </View>
            </View>
            
            <View style={styles.container}>
                <Text style={styles.learningText}>¿Qué es el consumo responsable?</Text>
                <View style={styles.containerInfo}>
                    <WebView
                        style={{ width: imageWidth, height: 170 }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        allowsFullscreenVideo={true}
                        source={{ uri: "https://www.youtube.com/embed/RQSpNiioUeA" }}
                    />
                </View>
            </View>
        
        </ScrollView>
    );
}


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