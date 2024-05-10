import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const HeaderNavigation = ({ navigation, title, Login }) => {
    return (
        <View style={{ flex: 1, marginLeft: -16 }}>
            <Image style={{ width: '130%', height: 215, resizeMode: 'cover' }} source={require('../assets/headerImage.jpg')} />
            <View style={{ left: 20, top: 30, position: 'absolute' }}>
                {!Login && <TouchableOpacity style={{ backgroundColor: '#b6b9e3', height: 45, maxWidth: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 50 }} onPress={() => navigation.goBack()}>
                    <MaterialIcons name='keyboard-arrow-left' size={30} color="#fff" />
                </TouchableOpacity>}
                <Text style={{ fontSize: 35, fontWeight: '800', color: '#fff', width: '60%', marginTop: 10 }}>{title}</Text>
            </View>
        </View>
    )
}

export default HeaderNavigation

const styles = StyleSheet.create({})