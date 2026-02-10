
import { router } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import FokusButton from "../components/FokusButton";
import Footer from "../components/Footer";


export default function Index() {

  return (
    <View style={styles.container} >
      <Image
        source={require('../assets/imagesFokus/Fokus_logo.png')}
      />
      <View
        style={styles.content}
      >
        <View
          style={styles.textContainer}
        >
          <Text
            style={[styles.text, styles.textLight]}
          >
            Otimize sua{'\n'}
            Produtividade,
          </Text>
          <Text
            style={[styles.text, styles.textHeavy]}
          >
            mergulhe no que {'\n'}
            importa
          </Text>
        </View>
        <Image
          source={require('../assets/imagesFokus/img_home.png')}
          style={styles.image}
        />
        <FokusButton 
          title= "Quero iniciar!"
          onPress={()=> router.replace('/pomodoro')}
        />
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
    paddingVertical: 40,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    width: "90%",
  },
  textContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    width: "100%",
    textAlign: "center",
    fontSize: 32,
    color: "#FFFFFF",
  },
  textLight: {
    fontWeight: "300",
  },
  textHeavy: {
    fontWeight: "700",
  },
  image: {
    width: "90%",
    height: 350,
  },
});