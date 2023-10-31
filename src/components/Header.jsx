import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const options = ["Pomodoro", "Short Break", "Long Break"]

export default function Header({time}) {

    return (
        <View style={styles.mainContainer} >
            {options.map((item, index) => (
                <TouchableOpacity key={index}>
                    <Text>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        
    }

})