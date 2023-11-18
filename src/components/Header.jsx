import { useEffect } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const options = ["Pomodoro", "Short Break", "Long Break"]

export default function Header({ currentTime, setCurrentTime, setTime, setIsActive }) {

    function handlePress(index) {
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15
        setCurrentTime(index)
        setTime(newTime * 60)
        setIsActive(false)
    }

    return (
        <View style={styles.mainContainer} >
            {options.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.itemStyle, currentTime !== index && { borderColor: "transparent" }]}
                    onPress={() => handlePress(index)}
                >
                    <Text style={styles.itemTextStyle}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
    },
    itemStyle: {
        width: "33%",
        alignItems: "center",
        borderWidth: 3,
        padding: 5,
        borderRadius: 10,
        borderColor: "white",
        marginVertical: 20
    },
    itemTextStyle: {
        fontWeight: "bold"
    }
})