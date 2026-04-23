import { StyleSheet, View, TextStyle } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Presentacion from './components/Presentacion';

export default function App(){
  return(
    <SafeAreaProvider>
      <View style={styles.container}>
        <Presentacion/>
      </View>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8
  }
})