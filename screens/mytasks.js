import React from 'react';
import { Block, theme } from 'galio-framework';
import { StyleSheet, Dimensions, ScrollView, Text } from 'react-native';

import { CardLarge } from '../components';
import { argonTheme } from '../constants';
const { width } = Dimensions.get('screen');

const MyTasks = () => {

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
    <Block flex center style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          <Text style={styles.title} >
            Mis Tareas
          </Text>
          {tasks.map((task, idx) => <CardLarge key={idx} idx={idx} item={task} />)}
        </Block>
      </ScrollView>
    </Block>
  );
}


const styles = StyleSheet.create({
  container: {
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

export default MyTasks;
