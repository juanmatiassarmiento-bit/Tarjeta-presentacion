// Importación de componentes de React Native
// TextStyle está importado pero no se usa directamente en este archivo
import { StyleSheet, View, TextStyle } from "react-native";
// SafeAreaProvider es el proveedor de contexto necesario para que SafeAreaView funcione correctamente
import { SafeAreaProvider } from "react-native-safe-area-context";
// Componente de presentación personal
import Presentacion from './components/Presentacion';

// Componente raíz de la aplicación
export default function App(){
  return(
    // SafeAreaProvider envuelve toda la app para habilitar el manejo de áreas seguras
    <SafeAreaProvider>
      {/* Contenedor principal que centra el contenido en pantalla */}
      <View style={styles.container}>
        {/* Renderiza el componente de presentación */}
        <Presentacion/>
      </View>
    </SafeAreaProvider>
  )
}

// Estilos del componente raíz
const styles = StyleSheet.create({
  // Ocupa toda la pantalla, centra el contenido vertical y horizontalmente con padding
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8
  }
})