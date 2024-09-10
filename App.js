import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyComponent from './components/MyComponent';
import Table from './components/AnotherTable';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MyComponent /> */}
      <Table />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#eee',
    marginTop: 100,
  },
});
