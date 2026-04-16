import { StyleSheet, Text, Image, Linking, SafeAreaView, ScrollView } from "react-native";

export default function Presentacion() {

  const abrirInstagram = () => {
    Linking.openURL("https://www.instagram.com/juanma_tias?igsh=MTRlYmJ5aHdkbmZpeQ==");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>

        <Image 
          source={require("../WhatsApp Image 2026-04-09 at 09.44.40.jpeg")} 
          style={styles.imagen}
        />

        <Text style={styles.texto}>Nombre: Juan Matías Sarmiento</Text>
        <Text style={styles.texto}>Edad: 16 años</Text>
        <Text style={styles.texto}>Fecha de nacimiento: 14-04-2009</Text>

        <Text style={styles.link} onPress={abrirInstagram}>
          Ir a mi Instagram
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
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
    color: "#000", // 
    fontWeight: "bold",
    textAlign: "center",
  },

  link: { 
    marginTop: 25,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#E1306C",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
});