import React from 'react';
import { Block, Button, theme } from 'galio-framework';
import { StyleSheet, Dimensions, ScrollView, Text } from 'react-native';

import { argonTheme } from '../constants';
const { width } = Dimensions.get('screen');

const Details = ({ route }) => {
    const { params } = route
    console.dir(params.id)
    return (
        <Block flex style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.articles}>
                <Block style={styles.title}>
                    <Text style={styles.title} >
                        Contar cuentos a niños en hospitales
                    </Text>
                </Block>
                <Block style={styles.body}>
                    <Text style={styles.itemTitle}>Descripción: </Text>
                    <Text style={styles.itemText}>
                        Preparar 3 cuentos infantiles para animar a los niños que se encuentran hospitalizados.
                    </Text>
                </Block>
            </ScrollView>
                <Button style={styles.button}>
                    <Text style={styles.textButton}>
                        Completada
                    </Text>
                </Button>
        </Block>
    );
}


const styles = StyleSheet.create({
    container: {
        width: width,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title: {
        fontWeight: 'bold',
        color: argonTheme.COLORS.HEADER
    },
    articles: {
        width: width - theme.SIZES.BASE * 2,
        // paddingVertical: theme.SIZES.BASE,
    },
    title: {
        color: argonTheme.COLORS.ACTIVE,
        paddingVertical: 3,
        fontWeight: 'bold',
        fontSize: 20
    },
    body: {
        paddingVertical: 20,
        paddingHorizontal: 5,
        display: 'flex',
        flexDirection: 'row',

    },
    itemTitle: {
        fontWeight: 'bold'
    },
    itemText: {
        flex: 1,
        flexWrap: 'wrap',
        textAlign: 'justify',
        paddingLeft: 5,
        paddingRight: 20
    },
    button: {
        backgroundColor: argonTheme.COLORS.RED,
    },
    textButton: {
        color: argonTheme.COLORS.WHITE
    }
});

export default Details;
