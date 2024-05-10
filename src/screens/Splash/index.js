import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({ navigation }) => {
    useEffect(() => {
        AsyncStorage.removeItem('UserData')
        setTimeout(async () => {
            const loginData = await AsyncStorage.getItem('UserData')
            if (JSON.parse(loginData)) {
                navigation.navigate('Home');
            } else {
                navigation.navigate('Login');
            }
        }, 1000);
    }, [])

    return (
        <View
            style={styles.container}>
            <Image style={styles.imageStyle} source={require('../../assets/Logo.png')} />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#181725',
    },
    imageStyle: {
        width: '30%',
        height: '30%',
        resizeMode: 'contain'
    }
})