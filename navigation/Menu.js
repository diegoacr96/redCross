import { DrawerItem as DrawerCustomItem } from '../components';
import { Block, Text, theme } from "galio-framework";
import { UserContext } from "../context/user";
import { argonTheme } from "../constants";
import React, { useContext } from "react";
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Linking
} from "react-native";

const Goto = ({title, route}) => (
  <TouchableOpacity
  style={{ height: 60 }}
  onPress={route}
>
  <Block flex row style={styles.shadow}>
    <Block row center flex={0.9}>
      <Text
        size={15}
        color="rgba(0,0,0,0.5)"
      >
        {title}
      </Text>
    </Block>
  </Block>
</TouchableOpacity>
)

const CustomDrawerContent = ({ navigation, state }) => {
  const { setIsLoggedIn } = useContext(UserContext)
  const screens = [
    "Inicio",
    "Mis Tareas",
    // "Profile",
    // "Account",
    // "Elementos",
    // "Articulos",
  ];
  return (
    <Block
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
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
          <Block flex style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}>
            <Block style={{ borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }} />
          </Block>
          <Goto route={() => navigation.navigate("Inicio")} title="Perfil" />         
          <Goto route={() => setIsLoggedIn(false)} title="Cerrar Sesión" />         
        </ScrollView>
      </Block>
    </Block>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: 'center'
  },
  MenuText: {
    color: argonTheme.COLORS.HEADER
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    paddingHorizontal: 20,
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2
    },
  }
});

export default CustomDrawerContent;
