import React from 'react';
import { TouchableOpacity, StyleSheet, ScrollView, View, Text } from 'react-native';
import { Icon, Card, Button } from 'react-native-elements';
import { underline } from 'colorette';
import { WebView } from "react-native-webview";
const typeUser = "normalUse";

export default function Home(props) {
    const { navigation } = props;
    console.log(navigation);
    return (
        <ScrollView>

            <Text style={styles.hello}>Bienvenido a Reciclapp</Text>

            <Text style={{ fontSize: 25, color: "gray", marginTop: 20, marginLeft: 10, }}>Antes de empezar...</Text>
            <View style={styles.container}>
                <Text style={styles.learningText}>Informacion</Text>
                <View style={styles.containerIcons}>
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('Recycle', {})}}
                        style={styles.button}
                    >
                        <Icon
                            name="home"
                            type='font-awesome'
                            size={25}
                            color="#45BD3D"
                        />
                        <Text style={styles.textButtonLearning}>Reciclaje</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('GreenPoint', {})}}
                        style={styles.button}
                    >
                        <Icon
                            name="map-marker"
                            type='font-awesome'
                            size={25}
                            color="#45BD3D"
                        />
                        <Text style={styles.textButtonLearning}>Puntos Verdes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('Enviroment', {})}}
                        style={styles.button}
                    >
                        <Icon
                            name="globe"
                            type='font-awesome'
                            size={25}
                            color="#45BD3D"
                        />
                        <Text style={styles.textButtonLearning}>Medio Ambiente</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('Tips', {})}}
                        style={styles.button}
                    >
                        <Icon
                            name="info"
                            type='font-awesome'
                            size={25}
                            color="#45BD3D"
                        />
                        <Text style={styles.textButtonLearning}>Tips</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('RecycleProcess', {})}}
                        style={styles.button}
                    >
                        <Icon
                            name="truck"
                            type='font-awesome'
                            size={25}
                            color="#45BD3D"
                        />
                        <Text style={styles.textButtonLearning}>Proceso Reciclado</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const user = {
    name: 'Julieta',
    points: '1200'

}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: "white",
        margin: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,

    },
    containerIcons: {
        marginTop: 20,
        paddingBottom: 20,
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    hello: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 30,

    },
    learningText: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5,

    },
    button: {
        marginRight: 4,
        marginLeft: 4,
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    textButtonLearning: {
        fontSize: 10,
        color: "gray",
    },
});