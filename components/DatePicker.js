import DatePicker from 'react-native-datepicker'
import { Text, View, StyleSheet } from 'react-native'
import { argonTheme } from '../constants'
import React from 'react'


const Picker = ({ setDate, date, label }) => {
    console.log(date)
    return (
        <View style={styles.container}>
            <Text style={styles.label} >{label}</Text>
            <DatePicker
                date={date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        marginLeft: 0,
                        left: 0,
                        top: 4,
                    },
                    dateInput: {
                        borderColor: argonTheme.COLORS.BORDER,
                        borderRadius: 5,
                        marginLeft: 36,
                    },
                }}
                onDateChange={setDate}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    label: {
        color: argonTheme.COLORS.PLACEHOLDER
    }
})

export default Picker
