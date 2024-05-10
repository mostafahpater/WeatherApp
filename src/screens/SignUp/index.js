import { View, Text, SafeAreaView, TextInput, Switch, Pressable, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './Styles'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from 'react-native-check-box';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../redux/slicers/UsersSlice';
import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';
export const SignUp = () => {
    const dispatch = useDispatch()
    const { loading, error, userData } = useSelector((state) => state.users)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [signUpData, setSignUpData] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
    });
    const validationForm = () => {
        if (signUpData.userName === '' || signUpData.userName.trim().length === 0) {
            setIsModalVisible(!isModalVisible);
            setErrorMessage('please fill user name input');

            return false;
        } else if (signUpData.email === '' || signUpData.email.trim().length === 0) {
            setIsModalVisible(!isModalVisible);
            setErrorMessage('please fill email input');

            return false;
        } else if (signUpData.password === '' || signUpData.password.trim().length === 0) {
            setIsModalVisible(!isModalVisible);
            setErrorMessage('please fill password input');

            return false;
        } else if (signUpData.confirmPassword === '' || signUpData.confirmPassword.trim().length === 0) {
            setIsModalVisible(!isModalVisible);
            setErrorMessage('please fill confirm password input');

            return false;
        } else if (signUpData.password != signUpData.confirmPassword) {
            setIsModalVisible(!isModalVisible);
            setErrorMessage('password must match');
            return false;
        } else if (signUpData.acceptTerms === false) {
            setIsModalVisible(!isModalVisible);
            setErrorMessage('please accept terms');
            return false;
        } else {
            return true;
        }
    }
    const handelSubmit = () => {
        if (validationForm()) {
            dispatch(signUp(signUpData))
        }
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            {loading ? <Loader /> : <ScrollView>
                <View style={styles.inputView}>
                    <View style={{ paddingTop: 10 }}>
                        <Text
                            style={styles.labelInput}>
                            User name
                        </Text>
                        <View
                            style={styles.textInputContainer}>
                            <FontAwesome6 style={styles.iconStyle} name="circle-user" size={20} color="#000" />
                            <TextInput
                                style={styles.input}
                                value={signUpData?.userName}
                                onChangeText={(value) => {
                                    setSignUpData({ ...signUpData, userName: value })
                                }}
                                placeholder="Enter your user name"
                                placeholderTextColor={'#ababab'}
                            // underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text
                            style={styles.labelInput}>
                            Email
                        </Text>
                        <View
                            style={styles.textInputContainer}>
                            <FontAwesome6 style={styles.iconStyle} name="envelope" size={20} color="#000" />
                            <TextInput
                                style={styles.input}
                                value={signUpData?.email}
                                onChangeText={(value) => {
                                    setSignUpData({ ...signUpData, email: value })
                                }}
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
                            style={[styles.textInputContainer, {
                                marginHorizontal: 27,
                                alignSelf: 'center',
                            }]}>
                            <FontAwesome6 style={styles.iconStyle} name="lock" size={20} color="#000" />
                            <TextInput
                                style={styles.input}
                                placeholder='Enter your password'
                                placeholderTextColor={'#ababab'}
                                secureTextEntry={showPassword}
                                value={signUpData?.password}
                                onChangeText={(value) => {
                                    setSignUpData({ ...signUpData, password: value })
                                }}
                                autoCorrect={false}
                                autoCapitalize='none'
                            // underlineColorAndroid="transparent"
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Ionicons style={styles.iconStyle} name={showPassword ? "eye-outline" : "eye-off-outline"} size={25} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text
                            style={styles.labelInput}>
                            Confirm Password
                        </Text>
                        <View
                            style={[styles.textInputContainer, {
                                marginHorizontal: 27,
                                alignSelf: 'center',
                            }]}>
                            <FontAwesome6 style={styles.iconStyle} name="lock" size={20} color="#000" />
                            <TextInput
                                style={styles.input}
                                placeholder='Enter your password'
                                placeholderTextColor={'#ababab'}
                                secureTextEntry={showConfirmPassword}
                                value={signUpData?.confirmPassword}
                                onChangeText={(value) => {
                                    setSignUpData({ ...signUpData, confirmPassword: value })
                                }}
                                autoCorrect={false}
                                autoCapitalize='none'
                            // underlineColorAndroid="transparent"
                            />
                            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                                <Ionicons style={styles.iconStyle} name={showConfirmPassword ? "eye-outline" : "eye-off-outline"} size={25} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <CheckBox
                            style={{ flex: 1, padding: 10, color: '#000' }}
                            onClick={() => {
                                setSignUpData({ ...signUpData, acceptTerms: !signUpData.acceptTerms })
                            }}
                            isChecked={signUpData.acceptTerms}
                            rightTextStyle={{ color: "#000", fontSize: 15 }}
                            rightText={"I accept & agree terms conditions & privacy policy"}
                        />
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.button} onPress={() => handelSubmit()}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>}
            {isModalVisible && <ErrorMessage isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                errorMessage={errorMessage} />}
        </KeyboardAvoidingView>
    )
}

