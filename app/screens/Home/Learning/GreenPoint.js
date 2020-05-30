import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, ScrollView, View, Text } from 'react-native';
import { Icon, Card, Button, Image } from 'react-native-elements';
import { WebView } from "react-native-webview";
import ImagePreview from 'react-native-image-preview';

export default function Recycle(props) {
    const [visible, setVisibleToFalse] = useState(false);

    return (
        <ScrollView
            contentContainerStyle={{ backgroundColor: "#45BD3D" }}>

            <View style={styles.container}>
                <Text style={styles.learningText}>¿Cómo empezar a separar basura?</Text>
                <View style={styles.containerInfo}>
                    <WebView
                        style={{ width: 400, height: 170 }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{ uri: "https://www.youtube.com/embed/NVE1zh-DZ9A" }}
                    />
                </View>
            </View>
           
            <View style={styles.container}>
                <Text style={styles.learningText}>¿Por qué separar los residuos?</Text>
                <View style={styles.containerInfo}>
                    <TouchableOpacity
                        onPress={() => { setVisibleToFalse(true) }}
                    >
                        <Image
                            source={{ uri: 'https://pbs.twimg.com/media/BBuUOj6CIAA1RBt?format=jpg&name=medium' }}
                            style={{ width: 185, height: 170 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { setVisibleToFalse(true) }}
                    >
                        <Image
                            source={{ uri: 'https://pbs.twimg.com/media/BBuUOj6CIAA1RBt?format=jpg&name=medium' }}
                            style={{ width: 185, height: 170 }}
                        />
                    </TouchableOpacity>
                </View>

            </View>
            <ImagePreview visible={visible} source={{ uri: 'https://pbs.twimg.com/media/BBuUOj6CIAA1RBt?format=jpg&name=medium' }} close={setVisibleToFalse} />

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