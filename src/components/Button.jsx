import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native'
 
export default function ButtonProceed() {
    return (
        <Pressable style={styles.container}>
            <Text style={styles.text}>Proceed</Text>
        </Pressable>
    )
}
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 10
    },
    text:{
        color: "#fff",
        fontSize: 16
    }
})