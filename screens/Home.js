import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card } from '../components';
import articles from '../constants/articles';
import { argonTheme } from '../constants';
const { width } = Dimensions.get('screen');

const Home = () => {

  const tasks = [
    {
      title: 'echeee',
      cta: 'Ver detalles',
      horizontal: true
    },
    {
      title: 'Llama a la fiscalía',
      cta: 'View article'
    },
    {
      title: 'Yo te estoy diciendo algo?',
      cta: 'View article'
    },
    {
      title: 'Yo te estoy preguntando por dorian',
      cta: 'View article'
    }
  ];

  return (
    <Block flex center style={styles.home}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          <Text style={styles.title} >Tareas en progreso</Text>
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
