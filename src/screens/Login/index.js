import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './Styles'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slicers/UsersSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';

export const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const { loading, error, userData } = useSelector((state) => state.users)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const validationForm = () => {
        if (email === '' || email.trim().length === 0) {
            setIsModalVisible(!isModalVisible);
            setErrorMessage('Please enter your email');
            return false;
        } else if (password === '' || password.trim().length === 0) {
            setIsModalVisible(!isModalVisible);
            setErrorMessage('Please enter your password');
            return false;
        } else {

            return true;
        }
    }
    const handelSubmit = () => {
        if (validationForm()) {
            dispatch(login({ email, password })).then((res) => {
                console.log('res', res)
                if (res.error) {
                    setIsModalVisible(!isModalVisible);
                    setErrorMessage(res.payload);
                } else {
                    navigation.navigate('Home')
                }
            })
        }
    }

    return (
        <>
            {loading ? <Loader /> : <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={[styles.inputView, { marginTop: 70 }]}>
                        <View style={{ paddingTop: 10 }}>
                            <Text
                                style={styles.labelInput}>
                                Email
                            </Text>
                            <View
                                style={styles.textInputContainer}>
                                <FontAwesome6 style={styles.imageStyle} name="envelope" size={20} color="#000" />
                                <TextInput
                                    style={styles.input}
                                    value={email}
                                    onChangeText={setEmail}
                                    placeholder="Enter your email"
                                    placeholderTextColor={'#ababab'}
                                // underlineColorAndroid="transparent"
                                />
                            </View>
                        </View>
                        <View style={{ paddingTop: 10 }}>
                            <Text
                                style={styles.labelInput}>
                                Password
                            </Text>
                            <View
                                style={styles.textInputContainer}>
                                <FontAwesome6 style={styles.imageStyle} name="lock" size={20} color="#000" />
                                <TextInput
                                    style={styles.input}
                                    placeholder='Enter your password'
                                    placeholderTextColor={'#ababab'}
                                    secureTextEntry
                                    value={password}
                                    onChangeText={setPassword}
                                    autoCorrect={false}
                                    autoCapitalize='none'
                                // underlineColorAndroid="transparent"
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.rememberView}>
                        <View>
                            <TouchableOpacity onPress={() => Alert.alert("Forget Password!")}>
                                <Text style={styles.forgetText}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.button} onPress={() => handelSubmit()}>
                            <Text style={styles.buttonText}>Sign In</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', paddingVertical: 20 }}>
                            <View style={styles.lineBesideTitles} />
                            <Text style={styles.titleOr}>Or</Text>
                            <View style={styles.lineBesideTitles} />
                        </View>
                    </View>

                    <View style={styles.mediaIcons}>
                        <View style={styles.containerSocialIcon}>

                            <Image style={{ width: 30, height: 30, resizeMode: 'contain' }} source={require('../../assets/google-color-icon.png')} />
                        </View>
                        <View style={styles.containerSocialIcon}>
                            <FontAwesome6 name="facebook" size={30} color="#4267B2" />
                        </View>
                        <View style={styles.containerSocialIcon}>
                            <FontAwesome6 name="twitter" size={30} color="#1DA1F2" />
                        </View>

                    </View>

                    <Text style={styles.footerText}>Don't Have Account?
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Text style={styles.signup}>  Sign Up</Text>
                        </TouchableOpacity>
                    </Text>
                </ScrollView>
                {isModalVisible && <ErrorMessage isModalVisible={isModalVisible}
                    setIsModalVisible={setIsModalVisible}
                    errorMessage={errorMessage} />}
            </SafeAreaView>}
        </>
    )
}

