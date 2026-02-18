
import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { useTaskContext } from "../context/useTaskContext";
import Footer from "../Footer";



export const FormTask = ({ type, id = null }) => {
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  const { tasks, editTask, addTask } = useTaskContext();

  console.log(tasks)

    useEffect(() => {
      if (id) {
        setEditId(Number(id));
        const taskToEdit = tasks.find(t => t.id === editId);
        if (taskToEdit) {
          setDescription(taskToEdit.description);
        }
      }
    }, [id, tasks, editId]);

  const submitTask = () => {
    if (!description) {
      return;
    }

    if (type === 'add') {
      addTask(description);
    } 

    if (editId && type === 'edit') {
      editTask(editId, description);
    }
    router.push("/tasks");
    setDescription("");
  };

  const cancel = () => {
    setDescription("");
    setEditId(null);
    router.push("/tasks");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
        <View style={styles.inner}>
          <View style={styles.content}>
            <Text style={styles.title}>
              {type === 'add' ? 'Adicionar tarefa:' : 'Editar tarefa:'}
            </Text>
            <View style={styles.form}>
              <Text style={styles.label}>
                {type === 'add' ? 'Em que que você está trabalhando?' : 'Edite aqui a sua tarefa:'}
              </Text>
              <TextInput
                style={styles.input}
                multiline={true}
                numberOfLines={10}
                value={description}
                onChangeText={setDescription}
                placeholder={type === 'add' ? 'Adicione aqui a tarefa' : ''}
              />

              <View style={styles.buttons}>
                <Pressable style={styles.button}
                  onPress={cancel}
                >
                  <Feather name="trash" size={20} color="#021123" />
                  <Text style={styles.buttonText}>
                    {type === 'add' ? 'Limpar' : 'Cancelar'}
                  </Text>
                </Pressable>
                <Pressable style={styles.button}
                  onPress={ submitTask }
                >
                  <Ionicons name="save-sharp" size={20} color="#021123" />
                  <Text style={styles.buttonText}>
                    Salvar
                  </Text>
                </Pressable>
              </View>

            </View>
          </View>
          <Footer />
        </View>
      </TouchableWithoutFeedback>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    padding: 16,
    paddingBottom: 80,
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  inner: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  content: {
    width: "100%",
    alignItems: "center",
    gap: 16,
  },
  tutle: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  form: {
    width: "80%",
    gap: 24,
    padding: 16,
    backgroundColor: "#98A0A8",
    borderRadius: 8,
  },
  label: {
    fontSize: 20,
    color: "#021123",
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    padding: 16,
    height: 120,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignSelf: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 24,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  buttonText: {
    color: "#021123",
    fontSize: 16,
    fontWeight: "600",
  }
})