import { StyleSheet, Text, Image, Linking, ScrollView, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Presentacion() {
  const abrirInstagram = () => {
    Linking.openURL(
      'https://www.instagram.com/juanma_tias?igsh=MTRlYmJ5aHdkbmZpeQ=='
    );
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image source={require('./assets/imagen.jpg')} style={styles.imagen} />

        <View style={styles.infoContainer}>
  <Text style={styles.texto}>Nombre: Juan Matías Sarmiento</Text>
  <Text style={styles.texto}>Edad: 17 años</Text>
  <Text style={styles.texto}>Fecha de nacimiento: 14-04-2009</Text>

  <Text style={styles.link} onPress={abrirInstagram}>
    Ir a mi Instagram
  </Text>
</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
  alignItems: 'center',
  width: '100%',
},

  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },

  imagen: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
  },

  texto: {
    fontSize: 20,
    marginVertical: 6,
    color: '#000', // 👈 negro para que SIEMPRE se vea
    fontWeight: 'bold',
    textAlign: 'center',
  },

  link: {
    marginTop: 25,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#E1306C',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
});
