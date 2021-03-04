import { DrawerItem as DrawerCustomItem } from "../components";
import { Block, Text, theme } from "galio-framework";
import { UserContext } from "../context/user";
import { argonTheme } from "../constants";
import React, { useContext } from "react";
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Linking,
} from "react-native";

const Goto = ({ title, route, state }) => {
  const containerStyles = [
    styles.defaultStyle,
    state.index === 4 ? [styles.activeStyle, styles.shadow] : null,
  ];
  return (
    <TouchableOpacity
      style={{ height: 60 }}
      onPress={route}
      style={containerStyles}
    >
      <Block flex row style={styles.shadow}>
        <Block row center flex={0.9}>
          <Text
            size={15}
            bold={state.index === 4 ? true : false}
            color={state.index === 4 ? "white" : "rgba(0,0,0,0.5)"}
          >
            {title}
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({ navigation, state }) => {
  const { setIsLoggedIn } = useContext(UserContext);
  const screens = [
    "Inicio",
    "Mis Tareas en Progreso",
    // "Account",
    // "Elementos",
    // "Articulos",
  ];
  const containerStyles = [
    styles.defaultStyle,
    state.index === 4 ? [styles.activeStyle] : null,
  ];
  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Block flex={0.06} style={styles.header} />
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index ? true : false}
              />
            );
          })}
          <Block
            flex
            style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}
          >
            <Block
              style={{
                borderColor: "rgba(0,0,0,0.2)",
                width: "100%",
                borderWidth: StyleSheet.hairlineWidth,
              }}
            />
          </Block>
          <TouchableOpacity
            style={{ height: 60 }}
            onPress={() => navigation.navigate("Perfil")}
            style={containerStyles}
          >
            <Block flex row style={styles.shadow}>
              <Block row center flex={0.9}>
                <Text
                  size={15}
                  bold={state.index === 4}
                  color={state.index === 4 ? "white" : "rgba(0,0,0,0.5)"}
                >
                  Perfil
                </Text>
              </Block>
            </Block>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ height: 60 }}
            onPress={() => setIsLoggedIn(false)}
          >
            <Block flex row style={styles.shadow}>
              <Block row center flex={0.9}>
                <Text size={15} color={"rgba(0,0,0,0.5)"}>
                  Cerrar Sesión
                </Text>
              </Block>
            </Block>
          </TouchableOpacity>
        </ScrollView>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: "center",
  },
  MenuText: {
    color: argonTheme.COLORS.HEADER,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    paddingHorizontal: 20,
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 0,
  },
  activeStyle: {
    backgroundColor: argonTheme.COLORS.RED,
    borderRadius: 4,
  },
});

export default CustomDrawerContent;
