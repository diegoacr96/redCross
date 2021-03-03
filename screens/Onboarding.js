import { Block, Text, theme, Button, Input } from "galio-framework";
import { LinearGradient } from 'expo-linear-gradient'
import React, { useContext } from "react";
import {
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";

import argonTheme from "../constants/Theme";
import { UserContext } from "../context/user";

const { height, width } = Dimensions.get("screen");



const Onboarding = ({ navigation }) => {

  const handleLogin = async () => {
    setIsLoggedIn(true)
  }

  const { setIsLoggedIn } = useContext(UserContext)
  return (
    <LinearGradient style={styles.container}
      colors={['#E20513', '#de3a44', '#de3a44', '#E20513']}
    >
      <StatusBar hidden />
      <Block style={styles.padded}>
        <Block flex space="evenly">
          <Block style={styles.title}>
            <Text color="white" h2 bold>
              Cruz Roja
            </Text>
            <Text color="white" h4 bold>
              Voluntarios
              </Text>
          </Block>
          <Block center>
            <Input
              placeholder="E-mail"
              placeholderTextColor="grey"
              color="black" />
            <Input
              placeholder="Contraseña"
              placeholderTextColor="grey"
              password color="black" />
            <Button
              style={styles.button}
              color={argonTheme.COLORS.SECONDARY}
              onPress={handleLogin}
            >
              <Text style={styles.textButton}>
                Iniciar Sesión
              </Text>
            </Button >
          </Block>
        </Block>
      </Block>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
    height: 700,
  },
  button: {
    backgroundColor: argonTheme.COLORS.ACTIVE,
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0,
    shadowRadius: 0,
    display: 'flex',
  },
  textButton: {
    color: argonTheme.COLORS.WHITE,
    fontSize: 17.5
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%',
  },
  title: {
    marginTop: '-5%',
  },
  subTitle: {
    marginTop: 20
  }
});

export default Onboarding;
