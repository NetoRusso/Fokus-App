import { Pressable, StyleSheet, Text, View } from "react-native";
import { IconCheck, IconEdit, IconTrashCircle } from "../Icons";


const TaskItem = ({
  tarefa = "Tarefa Exemplo",
  completed = false,
  onToggleComplete,
  onPressEdit,
  onPressDelete
}) => {

  return (
    <View
      style={[styles.box, completed ? styles.boxChecked : null]}
    >
      <Pressable onPress={onToggleComplete}>
        <IconCheck checked={completed} />
      </Pressable>
      <Text style={styles.taskText}> {tarefa}</Text>
      <Pressable onPress={onPressEdit}>
        <IconEdit />
      </Pressable>
      <Pressable onPress={onPressDelete}>
        <IconTrashCircle />
      </Pressable>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  box: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: "#98A0A8",
    marginBottom: 8,
  },
  boxChecked: {
    backgroundColor: "#0F725C",
    transform: [{ scale: 0.98 }],
  },
  taskText: {
    flex: 1,
    color: "#021123",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    maxWidth: "70%",
  },
});