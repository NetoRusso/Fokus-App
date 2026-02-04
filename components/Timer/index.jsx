import { StyleSheet, Text } from "react-native";

const Timer = ({totalseconds }) => {
  
  const date = new Date(totalseconds * 1000);
  const options = { minute: '2-digit', second: '2-digit' }

  return (
    <Text style={styles.timer} >
      {date.toLocaleTimeString('pt-BR', options)}
    </Text>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timer: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
});