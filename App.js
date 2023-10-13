
import { StyleSheet, Text, View, StatusBar } from 'react-native';
// components
import Header from './src/components/Header';
import List from './src/components/List';
import Button from './src/components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Header/>
      <List/>
      <Button/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
