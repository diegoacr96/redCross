import { GenericInput, DatePicker } from "../../components";
import { Dimensions, StyleSheet } from 'react-native'
import { Block, Text, Checkbox } from "galio-framework";
import { argonTheme } from "../../constants";
import React, { useState } from "react";
import dayjs from 'dayjs'


export const Contact = () => {
    const { width } = Dimensions.get("screen");

    const [birthDay, setBirthDay] = useState(dayjs().format())

    return (
        <Block>
            <Block center>
                <Text style={styles.header}>
                    Información de contacto
                </Text>
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <GenericInput placeholder="Nombre" />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <GenericInput placeholder="Apellido" />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <DatePicker
                    setDate={setBirthDay}
                    date={birthDay}
                    label="Fecha de Nacimiento"
                />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <GenericInput
                    placeholder="Correo"
                />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <GenericInput
                    placeholder="Telefono"
                    keyboardType="number-pad"
                />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <GenericInput
                    placeholder="Identificación"
                    keyboardType="number-pad"
                />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <GenericInput
                    placeholder="Departamento"
                    keyboardType="number-pad"
                />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <GenericInput
                    placeholder="Municipio"
                    keyboardType="number-pad"
                />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <GenericInput
                    placeholder="Profesión"
                    keyboardType="number-pad"
                />
            </Block>
            <Block width={width * 0.8}>
                <GenericInput
                    secureTextEntry={true}
                    placeholder="Contraseña"
                />
            </Block>
            <Block row style={styles.passwordCheck}>
                <Text size={12} color={argonTheme.COLORS.MUTED}>
                    Seguridad de la contraseña
                </Text>
                <Text bold size={12} color={argonTheme.COLORS.SUCCESS}>
                    Fuerte
                </Text>
            </Block>
        </Block>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        marginBottom: 10
    },
})

