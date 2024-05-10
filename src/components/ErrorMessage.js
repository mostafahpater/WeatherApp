import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ErrorMessage = ({isModalVisible,setIsModalVisible,errorMessage}) => {
  return (
      <View
      style={{
          flex: 1,
          // backgroundColor: backgroundColor,
        }}>
              <View>

          <Modal animationType="slide"
        transparent={true} isVisible={isModalVisible}>
          <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Pressable
              style={styles.containerViewErrorMessage}
              // onPress={toggleModalError}
            >
              <View style={styles.contentContainerButtonOk}>
                <Text
                  style={[
                    styles.textTitle,
                    {color:'#f10657'},
                  ]}>
                  error
                </Text>
                <Text style={styles.textMessageError}>
                  {errorMessage}
                </Text>

                <TouchableOpacity
                  onPress={() => setIsModalVisible(!isModalVisible)}
                  style={[
                    styles.containerButtonOk,
                    {
                      backgroundColor:'#f10657',
                    },
                  ]}>
                  <Text style={styles.textOk}>ok</Text>
                </TouchableOpacity>
              </View>
            </Pressable>
          </View>
          </View>
          </Modal>
          </View>
        </View>
  )
}

export default ErrorMessage

const styles = StyleSheet.create({
    containerViewErrorMessage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      },
      containerButtonOk: {
        backgroundColor: '#11e497',
        // backgroundColor: '#11e497',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        width: '80%',
        padding: 8,
        borderRadius: 22,
      },
      contentContainerButtonOk: {
        backgroundColor: '#fff',
        width: '80%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
      },
      textTitle: {
        color: '#11e497',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 10,
      },
      textMessageError: {
        textAlign: 'center',
        marginVertical: 5,
        fontSize: 16,
        color: '#000',
      },
      textOk: {
        color: '#fff',
        fontFamily: '500',
        fontSize: 16,
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        width: 300,
        height: 150, 
        // backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
})
