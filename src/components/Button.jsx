import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useState, useEffect } from "react"
import { Audio } from "expo-av"

export default function MainButton({ time, setTime, isWorking, setIsWorking, isActive, setIsActive }) {

    useEffect(()=> {
        let interval = null;

        if(isActive) {
            interval = setInterval(() => {
                setTime(time -1)
            }, 1000)
        } else {
            clearInterval(interval)
        }

        if(time === 0) {
            setIsActive(false)
            setIsWorking((prev) => !prev)
            setTime(isWorking ? 300 : 1500)
        }

        return () => clearInterval(interval)
    }, [isActive, time])

    function handleStartStop() {
        playSound();
        setIsActive((prev) => !prev);
    }

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
            require("../../assets/click_button.mp3")
        )
        await sound.playAsync();
    }

    return (
            <TouchableOpacity style={styles.buttonContainer} onPress={handleStartStop}>
                <Text style={styles.buttonText} >{isActive ? "STOP" : "START"}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: "center",
        backgroundColor: "#333333",
        padding: 15,
        marginTop: 15,
        borderRadius: 15
    },
    buttonText: {
        color: "white",
        fontWeight: "bold"
    },

})