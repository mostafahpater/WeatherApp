/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-duplicate-props */
import * as React from 'react';
// import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import { Login } from '../screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../screens/Splash';
import { SignUp } from '../screens/SignUp';
import HeaderNavigation from '../components/HeaderNavigation';
import Home from '../screens/Home';
import { Dimensions, Text, View, useWindowDimensions } from 'react-native';
import AppWeatherHeader from '../components/AppWeatherHeader';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
    const userData = false
    // console.log('isFounduserData', Boolean(userData));

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={'Splash'}
                screenOptions={{
                    // gestureDirection: 'horizontal',
                    // headerShown: false,
                    headerMode: 'float',
                }}
            >

                <Stack.Screen name="Signup" component={SignUp}
                    options={({ navigation }) => ({
                        headerTitle: '',
                        headerLeft: (props) => <HeaderNavigation title={'Sign up to your account'} navigation={navigation} {...props} />
                    })}
                />
                <Stack.Screen options={{
                    headerShown: false
                }} name="Splash" component={Splash} />
                <Stack.Screen name="Login" component={Login}
                    options={({ navigation }) => ({
                        headerTitle: '',
                        headerLeft: (props) => <HeaderNavigation Login={true} title={'Sign in to your account'} navigation={navigation} {...props} />
                    })}
                />
                <Stack.Screen name="Home" component={Home}
                    options={({ navigation }) => ({
                        headerTitle: '',
                        headerLeft: (props) => <AppWeatherHeader {...props}/>
                    })}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};