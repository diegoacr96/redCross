import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme, Icon } from "galio-framework";

import { Button, Input } from "../components";
import { Images, argonTheme } from "../constants";

const { width, height } = Dimensions.get("screen");

const Register = () => {
  return (
    <Block style={styles.registerContainer}>
      <StatusBar hidden />
      <Block flex>
        <Block flex={0.1} middle>
          <Text style={styles.title}>Registro</Text>
        </Block>
        <Block flex center>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
            enabled
          >
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
              <Input
                borderless
                placeholder="Nombre"
                iconContent={
                  <Icon
                    size={16}
                    color={argonTheme.COLORS.ICON}
                    name="account-circle"
                    family="galio"
                    style={styles.inputIcons}
                  />
                }
              />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
              <Input
                borderless
                placeholder="Correo"
                iconContent={
                  <Icon
                    size={16}
                    color={argonTheme.COLORS.ICON}
                    name="contact-mail"
                    family="galio"
                    style={styles.inputIcons}
                  />
                }
              />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
              <Input
                borderless
                placeholder="Telefono"
                keyboardType="number-pad"
                iconContent={
                  <Icon
                    size={16}
                    color={argonTheme.COLORS.ICON}
                    name="contact-phone"
                    family="galio"
                    style={styles.inputIcons}
                  />
                }
              />
            </Block>
            <Block width={width * 0.8} style={{ marginBottom: 15 }}>
              <Input
                borderless
                placeholder="Identificación"
                keyboardType="number-pad"
                iconContent={
                  <Icon
                    size={16}
                    color={argonTheme.COLORS.ICON}
                    name="perm-identity"
                    family="galio"
                    style={styles.inputIcons}
                  />
                }
              />
            </Block>
            <Block width={width * 0.8}>
              <Input
                password
                borderless
                placeholder="Contraseña"
                iconContent={
                  <Icon
                    size={16}
                    color={argonTheme.COLORS.ICON}
                    name="security"
                    family="galio"
                    style={styles.inputIcons}
                  />
                }
              />
              <Block row style={styles.passwordCheck}>
                <Text size={12} color={argonTheme.COLORS.MUTED}>
                  Seguridad de la contraseña
                        </Text>
                <Text bold size={12} color={argonTheme.COLORS.SUCCESS}>
                  {" "}
                          Fuerte
                        </Text>
              </Block>
            </Block>
            <Block row width={width * 0.8}>
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
            <Block>
              <Button style={styles.createButton}>
                <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                  Registrarme
                </Text>
              </Button>
            </Block>
          </KeyboardAvoidingView>
        </Block>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 25
  },
  registerContainer: {
    shadowColor: argonTheme.COLORS.BLACK,
    backgroundColor: "#F4F5F7",
    height: height * 1,
    shadowOpacity: 0.1,
    overflow: "hidden",
    width: width * 1,
    shadowRadius: 8,
    borderRadius: 4,
    elevation: 1,
    shadowOffset: {
      width: 0,
      height: 4
    },
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    backgroundColor: argonTheme.COLORS.RED,
    width: width * 0.8,
    marginHorizontal: 0,
    marginVertical: 20
  },
  agree: {
    color: argonTheme.COLORS.RED,
    fontSize: 14,
    width: 150,
  }
});

export default Register;
