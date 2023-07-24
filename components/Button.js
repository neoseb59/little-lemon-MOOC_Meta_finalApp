import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const Button = ({ action, buttonText, disabled }) => {
    return (
        <Pressable style={ [styles.button, disabled && styles.disabled] } onPress={ action } disabled={ disabled }>
            <Text style={ styles.buttonText }>{ buttonText }</Text>
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        backgroundColor: '#495E57',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 8,
        width: "80%"
    },
    buttonText: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 20
    },
    disabled: {
        backgroundColor: 'grey',
        opacity: 0.5
    }
})