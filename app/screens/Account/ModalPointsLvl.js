import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const imageSize = 80;


export default function ModalPointsLvl() {
    return (
        <View style={styles.containerLvls}>
            <View style={styles.lvls}>
                <Text style={styles.text}>Nivel 1 - Brote</Text>
                <Image source={require('../../../assets/img/brote-icon.png')}
                    resizeMode="cover"
                    style={{ width: imageSize, height: imageSize }}
                />
                <Text style={styles.textDescription}>0 - 500 hojas</Text>
            </View>
            <View style={styles.lvls}>
                <Text style={styles.text}>Nivel 2 - Arbusto</Text>
                <Image source={require('../../../assets/img/arbusto-icon.png')}
                    resizeMode="cover"
                    style={{ width: imageSize, height: imageSize }}
                />
                <Text style={styles.textDescription}>500 - 1000 hojas</Text>
            </View>
            <View style={styles.lvls}>
                <Text style={styles.text}>Nivel 3 - Árbol</Text>
                <Image source={require('../../../assets/img/arbol-icon.png')}
                    resizeMode="cover"
                    style={{ width: imageSize, height: imageSize }}
                />
                <Text style={styles.textDescription}>1000 - 2000 hojas</Text>
            </View>
            <View style={styles.lvls}>
                <Text style={styles.text}>Nivel 4 - Bosque</Text>
                <Image source={require('../../../assets/img/bosque-icon.png')}
                    resizeMode="cover"
                    style={{ width: imageSize, height: imageSize }}
                />
                <Text style={styles.textDescription}> + 2000 hojas</Text>
            </View>
          

        </View>
    );
}

const styles = StyleSheet.create({
    containerLvls: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    lvls:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#f2f2f2",
        margin: 5,
    },
    text:{
        fontSize: 15,
        margin: 3,
        fontWeight: 'bold',
    },
    textDescription:{
        fontSize: 12,
        margin: 3,
    }
})