// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import Main from './src/Main';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <SafeAreaView style={styles.SafeAreaView}>
      <Main/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  SafeAreaView: {
     width: "100%"
  }
});

