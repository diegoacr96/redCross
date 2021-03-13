import { Dimensions, StyleSheet } from 'react-native';
import { GenericInput } from "../../components";
import { Block, Text, Radio } from "galio-framework";
import React, { useState } from "react";


export const Medical = () => {
    const { width } = Dimensions.get("screen");
    const [Secured, setSecured] = useState(true)

    return (
        <Block>
            <Block center>
                <Text style={styles.header}>
                    Información Médica
                </Text>
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <GenericInput placeholder="Nombre" />
                <Radio label="Si"  />
                <Radio label="No" name="secure" />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <GenericInput placeholder="Apellido" />
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
                    placeholder="Tipo de sangre"
                />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <GenericInput
                    placeholder="Estatura"
                    keyboardType="number-pad"
                />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <GenericInput
                    placeholder="Peso"
                    keyboardType="number-pad"
                />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <GenericInput
                    placeholder="Profesión"
                    keyboardType="number-pad"
                />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <GenericInput
                    placeholder="Idioma 1"
                />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                <GenericInput
                    placeholder="Idioma 2"
                />
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

