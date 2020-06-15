import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, ScrollView, View, Text, Dimensions } from 'react-native';
import { Icon, Card, Button, Image } from 'react-native-elements';
import { WebView } from "react-native-webview";
import ImagePreview from 'react-native-image-preview';

export default function Recycle(props) {
    const [visible, setVisibleToFalse] = useState(false);
    const [source, setSource] = useState("");

    const dimensions = Dimensions.get('window');
    const imageWidth = dimensions.width * 0.45;
    const videoWidth = dimensions.width * 0.9;
    
    return (
        <ScrollView
            contentContainerStyle={{ backgroundColor: "#45BD3D" }}>

            <View style={styles.container}>
                <Text style={styles.learningText}>¿Cómo empezar a separar basura?</Text>
                <View style={styles.containerInfo}>
                    <WebView
                        style={{ width: videoWidth, height: 170 }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        allowsFullscreenVideo={true}
                        source={{ uri: "https://www.youtube.com/embed/EAQSlu2NLEs" }}
                    />
                   
                </View>
                <View style={styles.containerInfo}>
                     <WebView
                        style={{ width: videoWidth, height: 170 }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{ uri: "https://www.youtube.com/embed/8dA5Bb59b1w" }}
                    />
                   
                </View>
                
            </View>
            <View style={styles.container}>
                <Text style={styles.learningText}>¿Qué es reciclar?</Text>
                <View style={styles.containerInfo}>
                    <WebView
                        style={{ width: videoWidth, height: 170 }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        allowsFullscreenVideo={true}
                        source={{ uri: "https://www.youtube.com/embed/iRMZttpiMto" }}
                    />
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.learningText}>¿Por qué separar los residuos?</Text>
                <View style={styles.containerInfo}>
                    <WebView
                        style={{ width: videoWidth, height: 170 }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        allowsFullscreenVideo={true}
                        source={{ uri: "https://www.youtube.com/embed/EAQSlu2NLEs" }}
                    />
                </View>
                <View style={styles.containerInfo}>
                    
                    <TouchableOpacity
                        onPress={() => { setVisibleToFalse(true), setSource(punto_verde) }}
                    >
                        <Image
                            source={{ uri: 'https://pbs.twimg.com/media/BBuUOj6CIAA1RBt?format=jpg&name=medium' }}
                            style={{ width: 170, height: 170 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { setVisibleToFalse(true) }}
                    >
                        <Image
                            source={require('../../../../assets/img/reciclar-1.jpeg')}
                            style={{ width: imageWidth, height: imageWidth }}
                        />
                        <ImagePreview visible={visible} source={{ uri: 'https://pbs.twimg.com/media/BBuUOj6CIAA1RBt?format=jpg&name=medium' }} close={setVisibleToFalse} />
                    </TouchableOpacity>
                </View>

            </View>
            

        </ScrollView>
    );
}

const reciclables_basura = 'https://pbs.twimg.com/media/BBuUOj6CIAA1RBt?format=jpg&name=medium';

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