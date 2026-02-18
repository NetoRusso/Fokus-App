import { Drawer } from 'expo-router/drawer';
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BackButtonDrawer } from '../components/BackButtonDrawer';
import { TasksProvider } from '../components/context/TaskProvider';

export default function Layout() {
  return (
    <TasksProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="light" />
        <Drawer
          screenOptions={{
            headerTitleStyle: {
              display: "none"
            },
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#021123",
            },
            drawerStyle: {
              backgroundColor: "#021123",
            },
            drawerLabelStyle: {
              color: "#fff",
            },
          }}
        >
          <Drawer.Screen
            name='index'
            options={{
              headerShown: false,
              drawerItemStyle: { display: "none" }
            }}
          />
          <Drawer.Screen
            name='pomodoro'
            options={{
              drawerLabel: 'Timer'
            }}
          />
          <Drawer.Screen
            name='tasks/index'
            options={{
              drawerLabel: 'Lista de Tarefas'
            }}
          />
          <Drawer.Screen
            name='add-task/index'
            options={{
              drawerItemStyle: { display: "none" },
              title: "",
              headerLeft: () => {
                return <BackButtonDrawer backHref='/tasks' />
              }
            }}
          />
          <Drawer.Screen
            name='edit-task/[id]'
            options={{
              drawerItemStyle: { display: "none" },
              title: "",
              headerLeft: () => {
                return <BackButtonDrawer backHref='/tasks' />
              }
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </TasksProvider>
  );
};