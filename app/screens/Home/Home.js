import React from 'react';
import { TouchableOpacity, StyleSheet, ScrollView, View, Text } from 'react-native';
import { Image, Icon, Card, Button } from 'react-native-elements';
import { underline } from 'colorette';
import { WebView } from "react-native-webview";
const typeUser = "normalUse";

export default function Home(props) {
    const { navigation } = props;
    console.log(navigation);
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.containerIcons}>
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('Recycle', {})}}
                        style={styles.button}
                    >
                          <Image
                            source={require('../../../assets/img/reciclaje-icon.png')}
                            style={{ width: 100, height: 100 }}
                        />
                        <Text style={styles.textButtonLearning}>Reciclaje en casa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('GreenPoint', {})}}
                        style={styles.button}
                    >
                        <Icon
                            name="map-marker"
                            type='font-awesome'
                            size={50}
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
                            size={50}
                            color="#45BD3D"
                        />
                        <Text style={styles.textButtonLearning}>Medio Ambiente</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('PlasticReduction', {})}}
                        style={styles.button}
                    >
                        <Icon
                            name="recycle"
                            type='font-awesome'
                            size={50}
                            color="#45BD3D"
                        />
                        <Text style={styles.textButtonLearning}>Reducción de plástico</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('RecycleProcess', {})}}
                        style={styles.button}
                    >
                        <Icon
                            name="truck"
                            type='font-awesome'
                            size={50}
                            color="#45BD3D"
                        />
                        <Text style={styles.textButtonLearning}>Proceso de reciclado</Text>
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
      
      


    },
    containerIcons: {
        marginTop: 20,
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
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        backgroundColor: '#fff',
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