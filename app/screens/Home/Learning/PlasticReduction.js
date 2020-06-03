import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, ScrollView, View, Text, Dimensions } from 'react-native';
import { Icon, Card, Button, Image } from 'react-native-elements';
import { WebView } from "react-native-webview";
import ImagePreview from 'react-native-image-preview';

export default function PlasticReduction(props) {
    const [visible, setVisibleToFalse] = useState(false);
    const [source, setSource] = useState("");

    const dimensions = Dimensions.get('window');
    const imageWidth = dimensions.width * 0.9;

    return (
        <ScrollView
            contentContainerStyle={{ backgroundColor: "#45BD3D" }}>
           
            <View style={styles.container}>
                <Text style={styles.learningText}>¿Que es reciclable?</Text>
                <View style={styles.containerInfo}>
                    <TouchableOpacity
                        onPress={() => { setVisibleToFalse(true), setSource(img_reciclable) }}
                    >
                        <Image
                            source={{uri: img_reciclable}}
                            style={{ width: imageWidth, height: 170 }}
                        />
                    </TouchableOpacity>
                   
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.learningText}>¿Qué es basura?</Text>
                <View style={styles.containerInfo}>
                    <TouchableOpacity
                        onPress={() => { setVisibleToFalse(true), setSource(img_basura) }}
                    >
                        <Image
                            source={{uri: img_basura}}
                            style={{ width: imageWidth, height: 170 }}
                        />
                    </TouchableOpacity>
                   
                </View>
            </View>

            <View style={styles.container}>
                <Text style={styles.learningText}>10 tips para usar menos plástico</Text>
                <View style={styles.containerInfo}>
                <TouchableOpacity
                        onPress={() => { setVisibleToFalse(true), setSource(img_tips) }}
                    >
                        <Image
                            source={{uri: img_tips}}
                            style={{ width: imageWidth, height: 170 }}
                        />
                    </TouchableOpacity>
                    
                </View>
            </View>

            <ImagePreview visible={visible} source={{uri: source}} close={setVisibleToFalse} />
        </ScrollView>
    );
}

const img_tips = 'https://i.ibb.co/D9YJR1G/10tips.jpg';
const img_basura = 'https://i.ibb.co/Vpt1fX6/Whats-App-Image-2020-06-02-at-20-42-40.jpg';
const img_reciclable = 'https://i.ibb.co/C6XNvdB/Whats-App-Image-2020-06-02-at-20-42-23.jpg';

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