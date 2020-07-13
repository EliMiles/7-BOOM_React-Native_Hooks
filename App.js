import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import SuccessScreen from './screens/SuccessScreen';
import FailureScreen from './screens/FailureScreen';

export default function App() {

  const [currentScreen,setCurrentScreen] = useState('GameScreen');
  const [currentMsg,setCurrentMsg] = useState('');
  const [currentNumber, setCurrentNumber] = useState(1);

  let content;

  const successHandler = (msg,currentNum) => {
    //console.log('test');
    //content = <SuccessScreen msg={msg} />
    //console.log(content);
    setCurrentNumber(currentNum);
    setCurrentMsg(msg);
    setCurrentScreen('SuccessScreen');
    setTimeout(() => {setCurrentScreen('GameScreen');}, 1500);
  }

  const failureHandler = (msg) => {
    setCurrentNumber(1);
    setCurrentMsg(msg);
    setCurrentScreen('FailureScreen');
  }

  const resetCurrentNumberHandler = () => {
    setCurrentNumber(1);
    setCurrentScreen('GameScreen');
  }

  if(currentScreen === 'GameScreen'){
    content = <GameScreen onSuccess={successHandler} onFailure={failureHandler} currentNumber={currentNumber} />;
  }
  else if(currentScreen === 'SuccessScreen'){
    content = <SuccessScreen msg={currentMsg} />
  }
  else if(currentScreen === 'FailureScreen'){
    content = <FailureScreen msg={currentMsg} onReset={resetCurrentNumberHandler} />
  }
  
  return (
    <View style={styles.container}>
      <Header title="7-BOOM" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
