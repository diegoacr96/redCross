import React from 'react';
import { Block, theme } from 'galio-framework';
import { StyleSheet, Dimensions, ScrollView, Text } from 'react-native';

import { argonTheme } from '../constants';
const { width } = Dimensions.get('screen');

const Details = ({ route }) => {
    const { params } = route
    return (
        <Block flex center style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.articles}>
                <Block flex>
                    <Text style={styles.title} >
                        Tarea {params.idx}
                    </Text>
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

export default Details;
