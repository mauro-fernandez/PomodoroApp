import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { useState } from "react"
import Header from "./src/components/Header"
import Timer from './src/components/Timer';
import MainButton from './src/components/Button';



//  <StatusBar style="auto" />

const isIos = Platform.OS === "ios"

const colors = ["#F7DC6F","#A2D9CE" , "#D7BDE2"]

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60); // 25 segundos x 60 segundos === 25 minutos
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK"); // este enum retorna su index
  const [isActive, setIsActive] = useState(false);

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors[currentTime]}]}>
      <View style={styles.androidSafeView}>
        <Text style={styles.text}>Pomodoro App</Text>
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime} setIsActive={setIsActive} />
        <Timer time={time} />
        <MainButton
          time={time}
          setTime={setTime}
          isWorking={isWorking}
          setIsWorking={setIsWorking}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  androidSafeView: {
    flex: 1,
    paddingTop: isIos ? "5%" : "15%",
    paddingHorizontal: 15,
  },
  text:  {
    fontSize: 32,
    fontWeight: "bold",
  }
});
