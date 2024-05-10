import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//////////////// sign up
export const getWeather = createAsyncThunk(
    "weather/getWeather",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const options = {
                method: 'GET',
                url: 'https://yahoo-weather5.p.rapidapi.com/weather',
                params: {
                  location: 'cairo',
                  format: 'json',
                  u: 'c'
                },
                headers: {
                  'X-RapidAPI-Key': '981f2589b9msh8ea7a8c820da077p1d6feajsn6de7f8a3e671',
                  'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
                }
              };
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

/////////// Start Slice weather
const initialState = {
    weatherData: [],
    loading: false,
    error: false,
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.weatherData = action.payload;
            })
            .addCase(getWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default weatherSlice.reducer;