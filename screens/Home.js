import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import { argonTheme } from '../constants';
const { width } = Dimensions.get('screen');

const Home = () => {

  const tasks = [
    {
      title: 'Condución de vehiculos',
      cta: 'Ver detalles',
    },
    {
      title: 'Contar cuentos a niños en hospitales',
      cta: 'View article'
    },
    {
      title: 'Promover hábitos saludables',
      cta: 'View article'
    }
  ];

  return (
    <Block flex center style={styles.home}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          <Text style={styles.title} >Tareas Sugeridas</Text>
          {tasks.map((task, idx) => <Card key={idx} item={task} />)}
        </Block>
      </ScrollView>
    </Block>
  );
}


const styles = StyleSheet.create({
  home: {
    width: width,
  },
  title: {
    fontWeight: 'bold',
    color: argonTheme.COLORS.HEADER
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
