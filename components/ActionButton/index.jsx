import { Pressable, StyleSheet, Text } from "react-native";

const ActionButton = ({ active, onPress, display }) => {

  return (
    <Pressable
      style={[
        styles.contextPressable,
        active && styles.contextPressableActive
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.contextPressableText,
          active && styles.contextPressableTextActive
        ]}
      >
        {display}
      </Text>
    </Pressable>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 8,
  },
  contextPressable: {
    borderRadius: 8,
  },
  contextPressableText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: 400,
    padding: 8,
  },
  contextPressableActive: {
    backgroundColor: "#144480",
  },
  contextPressableTextActive: {
    fontWeight: 800,
  },
});