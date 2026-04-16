import {StyleSheet, View, TextStyle} from "react-native";
import Presentacion from './components/Presentacion'

export default function App(){
  return(
    <View style= {styles.container}>
      <Presentacion/>


    </View>
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