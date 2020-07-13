import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SuccessScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.msg}>{props.msg}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#7fff00',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    msg: {
        fontSize: 15
    }
});

export default SuccessScreen;