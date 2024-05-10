import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWeather } from '../../redux/slicers/WeatherSlice'
import Loader from '../../components/Loader'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
const Home = () => {
    const dispatch = useDispatch()
    const { loading, error, weatherData } = useSelector((state) => state.weather)
    useEffect(() => {
         dispatch(getWeather())
    }, [])
    console.log('weatherData', weatherData)
    return (
        <>
            {loading ? <Loader /> :
                <FlatList
                    data={weatherData.forecasts}
                    contentContainerStyle={{ paddingBottom: 80 }}
                    keyExtractor={(item, index) => index}
                    renderItem={({ item, index }) => (
                        <View style={styles.containerCard} key={index}>
                            <Image style={styles.imageStormCloud} source={require('../../assets/Stormclouds.jpg')} />
                            <View style={styles.weatherNumberContainer}>
                                {/* <Image style={{ width: 40, height: 40, resizeMode: 'cover' }} source={require('../../assets/rain.png')} /> */}
                                <FontAwesome6 name="cloud-sun-rain" size={26} color="#ffc800" />
                                <Text style={styles.weatherNumberText}>{item.high}</Text>
                            </View>
                            <View style={styles.bottomCardContainer}>
                                <View style={styles.locationAndDateContainer}>
                                    <FontAwesome6 name="location-dot" size={20} color="#ff8861" />
                                    <Text style={{ color: '#7d7d7d', fontSize: 16 }}>{weatherData.location.city}</Text>
                                </View>
                                <View style={styles.locationAndDateContainer}>
                                    <FontAwesome6 name="calendar-days" size={20} color="#ff8861" />
                                    <Text style={{ color: '#7d7d7d', fontSize: 16 }}>{new Date(item.date * 1000).toISOString().split('T')[0]}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                />}
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    containerCard: {
        marginHorizontal: 25,
        position: 'relative',
        marginTop: 20
    },
    imageStormCloud: {
        width: '100%',
        height: 200,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        resizeMode: 'cover'
    },
    weatherNumberContainer: {
        position: 'absolute',
        top: 16,
        left: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    weatherNumberText: {
        color: '#ff8861',
        fontSize: 18,
        paddingHorizontal: 7
    },
    bottomCardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    locationAndDateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
})