import { Pressable, StyleSheet, Text } from "react-native";

const FokusButton = ({ onPress, title, Icon, outLine=false }) => {

  return (
    <Pressable style={[styles.button, outLine && styles.outLine]} onPress={onPress}>
      {Icon}
      <Text style={[styles.buttonText, outLine && styles.outLineText]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default FokusButton;

const styles = StyleSheet.create({

  button: {
    width: "100%",
    backgroundColor: "#B872FF",
    borderRadius: 32,
    padding: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
    color: "#021123",
  },
  outLineText: {
    color: "#B872FF",
  },
  outLine: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#B872FF",
  }
});