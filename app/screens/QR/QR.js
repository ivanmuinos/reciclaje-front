import React, { Component, useState, useEffect } from 'react';
import { View, Text, AppRegistry, StyleSheet, TouchableOpacity, Linking, Button, AsyncStorage } from 'react-native';

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';

import LottieView from "lottie-react-native";

//firebase
import { firebaseApp } from '../../utils/firebase';
import firebase from "firebase/app";
import { decode, encode } from 'base-64'
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }
import "firebase/firestore";

const db = firebase.firestore(firebaseApp);
//

export default function QR(props) {

  const { navigation } = props;
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      getItem('user');
    })();
    
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setLoading(true);
    addPointsQR(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      {loading ? <Loading/> : 

        <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
    }
      {scanned && <Button title={'Scanear nuevamente'} onPress={() => resetFlags()} />}
    
  
   
    </View>
  );

  function Loading() {
    return (
        <View style={styles.loading}>
            <LottieView
                source={require('../../../assets/qr.json')}
                autoPlay
                style={{ width: 300, height: 300 }}
                resizeMode="cover"
                loop={false}
            />
            <Text style={{fontSize: 20, fontWeight: "bold", color:"gray"}}>Contribuyendo al planeta ...</Text>
        </View>
    )
}

  function resetFlags(){
    setScanned(false);
    setLoading(false);
  }

  async function getItem(key) {
    console.log(key);
    const value = await AsyncStorage.getItem(key);
    setUser(JSON.parse(value));
 
  }

  function addPointsQR(data){
    setScanned(false);
    let userRef = db.collection("user");
    let query = userRef.where('email', '==', user.email)
        .where('password', '==', user.password)
        .get()
        .then((snapshot) => {
            if (snapshot.empty) {
                setLogged(false);
                Alert.alert("Usuario o contraseña incorrectos");
            } else {
                snapshot.forEach(doc => {
                    let result = parseInt(doc.data().points) + 500
                    db.collection("user").doc(doc.id).update({ points: result });
                    navigation.navigate(data, {
                      points: 500
                    });
                    setLoading(false);
                });
            }
        })
  }
}

const styles = StyleSheet.create({
  loading:{
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginBottom: "35%"
}
})


