import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, Platform } from 'react-native';
import { useState } from "react"
import Header from "./src/components/Header"


//  <StatusBar style="auto" />

const isIos = Platform.OS === "ios"

const colors = ["#F7DC6F","#A2D9CE" , "#D7BDE2"]

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60); // 25 segundos x 60 segundos === 25 minutos
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK"); // este enum retorna su index



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.androidSafeView}>
        <Text style={styles.text}>Pomodoro</Text>
        <Header time={time} />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  androidSafeView: {
    paddingTop: isIos ? 0 : 30
  },
  text:  {
    fontSize: 32, fontWeight: "bold"
  }
});
