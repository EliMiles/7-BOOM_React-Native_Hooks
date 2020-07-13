import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/Colors';

const GameScreen = props => {

    const [currentNumber, setCurrentNumber] = useState(props.currentNumber);

    const nextButtonHandler = () => {
        
        if(currentNumber % 7 === 0 ){
            //Alert.alert('BOOOOOOOOM !!!', currentNumber + ' can be divided by 7 !!!', [{ text: 'OK', style: 'destructive', onPress: resetGameHandler }]);
            props.onFailure('BOOOOOOOOM !!! ' + currentNumber + ' can be divided by 7 !!!');
            return;
        }
        else if((currentNumber + '').indexOf('7') > -1){
            //Alert.alert('BOOOOOOOOM !!!', currentNumber + ' contains the number 7 !!!', [{ text: 'OK', style: 'destructive', onPress: resetGameHandler }]);
            props.onFailure('BOOOOOOOOM !!! ' + currentNumber + ' contains the number 7 !!!');
            return;
        }

        setCurrentNumber(currentNumber + 1);
    };

    const boomButtonHandler = () => {
        
        if(currentNumber % 7 === 0 ){
            props.onSuccess('Very Good ! ' + currentNumber + ' can be divided by 7',currentNumber + 1);
            setCurrentNumber(currentNumber + 1);
        }
        else if((currentNumber + '').indexOf('7') > -1){
            props.onSuccess('Very Good ! ' + currentNumber + ' contains the number 7',currentNumber + 1);
            setCurrentNumber(currentNumber + 1);
        }
        else{
            //Alert.alert('OOPS !', currentNumber + ' it is a good number', [{ text: 'OK', style: 'destructive', onPress: resetGameHandler }]);    
            props.onFailure('OOPS ! ' + currentNumber + ' it is a good number');
        }
    };

    const resetGameHandler = () => {
        setCurrentNumber(1);
    }

    return (
        <View style={styles.screen} >
            <Card style={styles.card}>
                <Text style={styles.currentNumber}>{currentNumber}</Text>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="BOOM" color={Colors.secondaryTheme} onPress={boomButtonHandler} />
                    <Button style={styles.button} title="NEXT" color={Colors.mainTheme} onPress={nextButtonHandler} />
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '40%'
    },
    card: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    currentNumber: {
        textAlign: 'center',
        fontSize: 100
    },
    buttonContainer: {
        flexDirection: 'row',
        width: "100%",
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        flexDirection: 'row-reverse'
    }
});

export default GameScreen;