import { StyleSheet, Text, View } from "react-native";


const Footer = () => {

  return (
    <View style={styles.footer} >
      <Text style={styles.footerText}>
        Projeto fictício e sem fins comerciais.
      </Text>
      <Text style={styles.footerText}>
        Desenvolvido por Alura.
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    width: "80%",
  },
  footerText: {
    textAlign: "center",
    color: "#98A0A8",
    fontWeight: 400,
    fontSize: 14,
  }
});