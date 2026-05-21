// Importación de componentes de React Native necesarios para la pantalla
// useState se importa desde react-native (aunque normalmente viene de 'react')
import { StyleSheet, Text, Image, ScrollView, View, Linking, useState } from 'react-native';
// SafeAreaView evita que el contenido quede tapado por notch o barra de estado
import { SafeAreaView } from "react-native-safe-area-context";


// Componente principal de presentación personal
export default function Presentacion() {
  // Estado para controlar si el link está siendo presionado (cambia el estilo visual)
  const [pressed, setPressed] = useState(false);

  // Función que abre el perfil de Instagram en el navegador o app
  const abrirInstagram = () => {
    Linking.openURL(
      'https://www.instagram.com/juanma_tias?igsh=MTRlYmJ5aHdkbmZpeQ=='
    );
  };

  return (
    // SafeAreaView asegura que el contenido respete los bordes seguros del dispositivo
    <SafeAreaView>
      {/* ScrollView permite scroll vertical si el contenido supera la pantalla */}
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Imagen de perfil cargada desde los assets locales */}
        <Image source={require('./assets/imagen.jpg')} style={styles.imagen} />

        {/* Contenedor de la información personal */}
        <View style={styles.infoContainer}>
          {/* Textos con datos personales */}
          <Text style={styles.texto}>Nombre: Juan Matías Sarmiento</Text>
          <Text style={styles.texto}>Edad: 17 años</Text>
          <Text style={styles.texto}>Fecha de nacimiento: 14-04-2009</Text>

          {/* Botón de Instagram hecho con Text y eventos táctiles */}
          <Text
            // Aplica el estilo base del link, y si está presionado agrega el estilo adicional
            style={[styles.link, pressed && styles.linkPresionado]}
            // Al tocar: abre el Instagram
            onPress={abrirInstagram}
            // Al iniciar el toque: activa el estado "presionado" para cambiar el estilo
            onPressIn={() => setPressed(true)}
            // Al soltar: desactiva el estado "presionado"
            onPressOut={() => setPressed(false)}
            // Si se mantiene presionado 800ms: muestra una alerta
            onLongPress={() => alert('¡Mantuviste presionado!')}
            // Tiempo de espera antes de disparar onLongPress
            delayLongPress={800}
            // Amplía el área táctil 10px en cada lado para facilitar el toque
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            Ir a mi Instagram
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Definición de estilos del componente
const styles = StyleSheet.create({
  // Centra los elementos de información horizontalmente
  infoContainer: {
    alignItems: 'center',
    width: '100%',
  },
  // Contenedor general con fondo gris claro (definido pero no usado en el return)
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  // Estilo del ScrollView: centra el contenido y agrega padding vertical
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  // Imagen circular de 140x140 con margen inferior
  imagen: {
    width: 140,
    height: 140,
    borderRadius: 70, // La mitad del ancho/alto para hacerla circular
    marginBottom: 20,
  },
  // Estilo de los textos de información personal
  texto: {
    fontSize: 20,
    marginVertical: 6,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Estilo del botón de Instagram: fondo rosa, texto blanco, bordes redondeados
  link: {
    marginTop: 25,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#E1306C', // Color rosa característico de Instagram
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  // Estilo al presionar: oscurece el fondo y reduce ligeramente el tamaño
  linkPresionado: {
    backgroundColor: '#a0204a', // Rosa más oscuro para feedback visual
    transform: [{ scale: 0.96 }], // Efecto de "hundimiento" al presionar
  },
});