import React, { useContext } from "react";
import { Dimensions, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

// screens
import Onboarding from "../screens/Onboarding";
import Elements from "../screens/Elements";
import Articles from "../screens/Articles";
import MyTasks from '../screens/mytasks';
import Profile from "../screens/Profile";
import Details from '../screens/details';
import Home from "../screens/Home";
import Pro from "../screens/Pro";
import Register from '../screens/Register'
// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Header } from "../components";
import { UserContext } from "../context/user";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Public = createStackNavigator();
const PublicDrawer = createDrawerNavigator();
const Drawer = createDrawerNavigator();

function ElementsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Elementos"
        component={Elements}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Elementos" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function ArticlesStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Articulos"
        component={Articles}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Articulos" navigation={navigation} scene={scene} />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Perfil" mode="card" headerMode="screen">
      <Stack.Screen
        name="Perfil"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              white
              title="Perfil"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Pro"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              white
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Inicio"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Inicio"
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  );
}

const MyTasksStack = ({ idx }) => {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Mis tareas en Progreso"
        component={MyTasks}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Mis Tareas en Progreso"
              // search
              // options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />

      <Stack.Screen
        name="Detalles"
        component={Details}
        idx={idx}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Detalles"
              // search
              // options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
    </Stack.Navigator>
  )
}

export default function OnboardingStack(props) {
  const { isLoggedIn } = useContext(UserContext)
  return isLoggedIn ? (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  ) : (
    <Public.Navigator mode="card" headerMode="none">
      <Public.Screen name="Login" component={PublicViews} />
    </Public.Navigator>
  );
}

const PublicViews = () => {
  return (
    <PublicDrawer.Navigator
      initialRouteName="Register">
      <Public.Screen name="Register" component={Register} />
      <Public.Screen name="Login" component={Onboarding} />
    </PublicDrawer.Navigator>
  )
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Inicio"
    >
      <Drawer.Screen name="Inicio" component={HomeStack} />
      <Drawer.Screen name="Mis Tareas en Progreso" component={MyTasksStack} />
      <Drawer.Screen name="Articulos" component={ArticlesStack} />
      <Drawer.Screen name="Elements" component={ElementsStack} />
      <Drawer.Screen name="Perfil" component={ProfileStack} />
    </Drawer.Navigator>
  );
}

