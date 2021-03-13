import { StyleSheet, TextInput } from 'react-native'
import { argonTheme } from '../constants'
import React from 'react'

const GenericInput = ( props) => {
    return (
        <TextInput {...props} style={styles.input} />
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: argonTheme.COLORS.BORDER,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 3,
        borderWidth: 1,
    }
})

export default GenericInput
