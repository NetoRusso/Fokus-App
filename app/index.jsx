import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import ActionButton from "../components/ActionButton";
import FokusButton from "../components/FokusButton";
import { IconPause, IconPlay } from "../components/Icons";
import Timer from "../components/Timer";

const pomodoro = [
  {
    id: "focus",
    initialValue: 25 * 60,
    image: require("./img_focus.png"),
    display: 'Foco'
  },
  {
    id: "short",
    initialValue: 5 * 60,
    image: require("./img_short.png"),
    display: 'Pausa Curta'
  },
  {
    id: "long",
    initialValue: 15 * 60,
    image: require("./img_long.png"),
    display: 'Pausa Longa'
  }
]

export default function Index() {

  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);

  const timerRef = useRef(null)

  const clearTimer = () => {

    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  }

  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType);
    setSeconds(newTimerType.initialValue);
    clearTimer();
  };

  const toggleTimer = () => {
    if (timerRef.current) {
      clearTimer();
      return
    };
    setTimerRunning(true);

    const id = setInterval(() => {
      setSeconds(oldSeconds => {
        if (oldSeconds === 0) {
          clearTimer();
          return timerType.initialValue;
        }
        return oldSeconds - 1;
      })

    }, 1000);

    timerRef.current = id;
  };


  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={timerType.image}
        style={styles.image}

      />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map(p => (
            <ActionButton
              key={p.id}
              active={p.id === timerType.id}
              onPress={() => toggleTimerType(p)}
              display={p.display}
            />
          ))}
        </View>
        <Timer totalseconds={seconds} />
        <FokusButton
          title={timerRunning ? "Pausar" : "Começar"}
          Icon={timerRunning ? <IconPause /> : <IconPlay />}
          onPress={toggleTimer}
        />
      </View>
      <View style={styles.footer} >
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Alura.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  image: {
    width: 317,
    height: 317,
  },
  actions: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: "#14448030",
    width: "80%",
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 8,
  },
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
