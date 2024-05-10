import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppWeatherHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.backgroundContainer} />
            <View style={styles.appWeatherTitleContainer}>
                <Text style={styles.appWeatherTitle}>App Weather</Text>
            </View>
        </View>
    )
}

export default AppWeatherHeader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: -16
    },
    backgroundContainer: {
        width: '130%',
        height: 80,
        backgroundColor: '#d16060'
    },
    appWeatherTitleContainer: {
        left: Dimensions.get('screen').width / 3.1,
        top: 10,
        position: 'absolute'
    },
    appWeatherTitle: {
        fontSize: 27,
        fontWeight: '500',
        color: '#fff',
        width: '100%',
        marginTop: 10
    }
})