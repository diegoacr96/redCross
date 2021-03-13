import { GenericInput, DatePicker } from "../../components";
import { Dimensions, StyleSheet } from 'react-native'
import { Block, Text, Checkbox } from "galio-framework";
import { argonTheme } from "../../constants";
import React, { useState } from "react";
import dayjs from 'dayjs'


export const Personal = () => {
    const { width } = Dimensions.get("screen");

    const [birthDay, setBirthDay] = useState(dayjs().format())

    return (
        <Block>
            <Block center>
                <Text style={styles.header}>
                    Información personal
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
                />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <GenericInput
                    placeholder="Municipio"
                />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <GenericInput
                    placeholder="Profesión"
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
            <Block width={width * 0.8}>
                <GenericInput
                    secureTextEntry={true}
                    placeholder="Confirmar Contraseña"
                />
            </Block>
            <Block row width={width * 0.8} marginVertical={15}>
                <Checkbox
                    checkboxStyle={{
                        borderWidth: 3
                    }}
                    color={argonTheme.COLORS.RED}
                    label="Acepto los "
                />
                <Text style={styles.agree}>
                    Terminos y condiciones
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
    passwordCheck: {
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 20,
    },
    agree: {
        color: argonTheme.COLORS.RED,
        fontSize: 14,
        width: 150,
    },
})