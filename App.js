import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './src/screens/navigation/NavigationStack';
import FormProvider from './src/context/FormContext';

export default function App() {
  return (
    <View style={styles.container}>
      <FormProvider>
        <StatusBar style="auto" />
        <AppNavigator />
      </FormProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
