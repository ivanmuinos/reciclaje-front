import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import TimePicker from "react-native-24h-timepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';

export default function TakeAwayUpload2() {

    const [startTime, setStartTime] = useState("Desde HH:mm");
    const [endTime, setEndTime] = useState("Hasta HH:mm");
    const [isStartTimePickerVisible, setStartTimePickerVisibility] = useState(false);
    const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);

    const showStartTimePicker = () => { setStartTimePickerVisibility(true); };
    const showEndTimePicker = () => { setEndTimePickerVisibility(true); };
    const hideStartTimePicker = () => { setStartTimePickerVisibility(false); };
    const hideEndTimePicker = () => { setEndTimePickerVisibility(false); };

    const handleStartTimeConfirm = (time) => {
        setStartTime(moment(time).format('HH:mm'))
        hideStartTimePicker();
    };

    const handleEndTimeConfirm = (time) => {
        setEndTime(moment(time).format('HH:mm'))
        hideEndTimePicker();
    };

    return (
        <View>
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Nombre de tu local'
                    placeholderTextColor={'#49AD26'}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}
                    onChangeText={(text) => console.log(text)}
                />
                <Input
                    placeholder='Take-away de...'
                    placeholderTextColor={'#49AD26'}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}
                    onChangeText={(text) => console.log(text)}
                />
                <Input
                    placeholder='Breve descripción'
                    placeholderTextColor={'#49AD26'}
                    inputContainerStyle={styles.inputContainerStyle}
                    inputStyle={styles.inputStyle}
                    onChangeText={(text) => console.log(text)}
                />
                <View style={styles.timeContainer}>
                    <TouchableOpacity onPress={showStartTimePicker}>
                        <Text
                            placeholder="HH:mm"
                            style={styles.timeBox}>{startTime}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={showEndTimePicker}>
                        <Text style={styles.timeBox}>{endTime}</Text>
                    </TouchableOpacity>

                    <DateTimePickerModal
                        isVisible={isStartTimePickerVisible}
                        mode="time"
                        locale="en_GB"
                        date={new Date()}
                        onConfirm={handleStartTimeConfirm}
                        onCancel={hideStartTimePicker}
                    />
                    <DateTimePickerModal
                        isVisible={isEndTimePickerVisible}
                        mode="time"
                        locale="en_GB"
                        date={new Date()}
                        onConfirm={handleEndTimeConfirm}
                        onCancel={hideEndTimePicker}
                    />
                </View>
            </View>

            <View style={styles.footer}>
                <Button
                    title="Cargar"
                    onPress={() => Alert.alert("Pendiente de verificación")}
                    buttonStyle={styles.buttonStyle}
                    containerStyle={styles.buttonContainerStyle}
                    titleStyle={styles.buttonTitleStyle}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        margin: 10,
        height: Dimensions.get('window').height * 0.35
    },
    inputContainerStyle: {
        marginTop: 7,
        marginBottom: 7,
        height: 50,
        backgroundColor: "white",
        borderBottomColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 2,
    },
    inputStyle: {
        textAlign: "center",
        color: "#49AD26"

    },
    timeContainer: {
        flexDirection: 'row',
    },
    timeBox: {
        marginTop: 7,
        marginBottom: 7,
        marginLeft: 9,
        textAlign: "center",
        fontSize: 16,
        color: "#49AD26",
        paddingTop: Dimensions.get('window').height * 0.021,
        width: Dimensions.get('window').width * 0.44,
        height: 50,
        backgroundColor: "white",
        borderBottomColor: "white",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 2,
    },
    footer: {
        backgroundColor: "white",
        height: Dimensions.get('window').height * 0.6,
        alignItems: "center",
    },
    buttonStyle: {
        backgroundColor: "#49AD26",
        borderRadius: 0,
        height: Dimensions.get('window').height * 0.1,
        width: Dimensions.get('window').width * 0.5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    buttonContainerStyle: {
        marginTop: 60,
    },
    buttonTitleStyle: {
        fontSize: 22,
        color: "white",

    }
})
