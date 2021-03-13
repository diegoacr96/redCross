import { Block, Text } from "galio-framework";
import { argonTheme } from "../constants";
import React, { useState } from "react";
import { Button } from "../components";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";
import {
  Aditional,
  Personal,
  Medical,
  Contact,
} from "./register";

const { width, height } = Dimensions.get("screen");
const Register = () => {
  const [step, setStep] = useState(1)

  const Steps = [
    <Personal />,
    <Medical />,
    <Contact />,
    <Aditional />,
  ]

  const next = () => {
    if (step < 3)
      setStep(step + 1)
  }

  const prev = () => {
    if (step > 0)
      setStep(step - 1)
  }

  return (
    <Block style={styles.registerContainer}>
      <StatusBar hidden />
      <ScrollView >
        <Block flex center>
          <Block flex={0.1} middle>
            <Text style={styles.title}>Completar registro</Text>
          </Block>
          <Block flex center  >
            {Steps[step]}
          </Block>
        </Block>
      </ScrollView>
      <Block center style={styles.buttonsContainer}>
        {step > 0 &&
          <Button style={styles.createButton} onPress={() => prev()}>
            <Text bold size={14} color={argonTheme.COLORS.WHITE}>
              Regresar
            </Text>
          </Button>
        }
        <Button style={styles.createButton} onPress={() => next()}>
          <Text bold size={14} color={argonTheme.COLORS.WHITE}>
            Continuar
          </Text>
        </Button>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
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
    flex: 1
  },
  inputIcons: {
    marginRight: 12
  },
  createButton: {
    backgroundColor: argonTheme.COLORS.RED,
    width: width * 0.35,
  },
  datePicker: {
    backgroundColor: argonTheme.COLORS.RED,
    color: argonTheme.COLORS.WHITE
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
  }
});

export default Register;
