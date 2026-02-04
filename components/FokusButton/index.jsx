import { Pressable, StyleSheet, Text } from "react-native";

const FokusButton = ({ onPress, title, Icon }) => {

  return (
    <Pressable style={styles.button} onPress={onPress}>
      {Icon}
      <Text style={styles.buttonText}>
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
  }
});