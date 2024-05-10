import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View style={styles.container}>
    <ActivityIndicator size={'large'} color={'#5c4dbd'}/>
  </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:"rgba(0,0,0,.1)"
      },
})