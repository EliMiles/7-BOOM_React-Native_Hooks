import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Colors from '../constants/Colors'

const FailureScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.msg}>{props.msg}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Reset" color={Colors.mainTheme} onPress={() => { props.onReset() }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#ff0000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    msg: {
        fontSize: 15
    },
    buttonContainer: {
        width: "50%",
        padding: 20
    }
});

export default FailureScreen;