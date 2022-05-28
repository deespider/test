import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Api from './Api';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title ="API" onPress={()=>Api.HelloWorldApi.helloWorld().then(result => console.log(result))} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
