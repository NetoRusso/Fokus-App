import { router } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import FokusButton from "../../components/FokusButton";
import Footer from "../../components/Footer";
import { IconPlus } from "../../components/Icons";
import TaskItem from "../../components/TaskItem";
import { useTaskContext } from "../../components/context/useTaskContext";



export default function Tasks() {

  const { tasks, deleteTask, toggleTaskCompleted } = useTaskContext();

  return (
    <View
      style={styles.container}
    >
      <View style={{ width: "90%", alignItems: "center", gap: 24 }}>
        <Text
          style={styles.title}
        >
          Lista de Tarefas:
        </Text>
        <View style={styles.tasksList}>
          {tasks.length > 0 ? (
            <FlatList
              data={tasks}
              renderItem={({ item }) =>
                <TaskItem
                  tarefa={item.description}
                  completed={item.completed}
                  onPressDelete={() => deleteTask(item.id)}
                  onToggleComplete={() => toggleTaskCompleted(item.id)}
                  onPressEdit={() => router.navigate(`/edit-task/${item.id}`)}
                />
              }
              keyExtractor={item => item.id}
            />
          ) : (
            <Text style={styles.msg}>
              Ainda não há tarefas na sua lista, que tal adicionar?
            </Text>
          )}
        </View>

        <FokusButton
          title="Adicionar nova tarefa"
          Icon={<IconPlus />}
          onPress={() => router.navigate('/add-task')}
          outLine
        />
      </View>
      <Footer />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#021123",
    padding: 16,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 80,
    paddingTop: 24
  },
  title: {
    color: "#fff",
    fontSize: 32,
    textAlign: "center"
  },
  tasksList: {
    height: "80%",
  },
  msg: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    marginTop: 64
  }
});