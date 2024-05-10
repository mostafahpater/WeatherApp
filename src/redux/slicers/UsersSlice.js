import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//////////////// sign up
export const signUp = createAsyncThunk(
    "users/signup",
    async (data, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            var dataArray=[]
            const existingData = await AsyncStorage.getItem('Users')
            if (existingData !== null) {
                dataArray.push(...JSON.parse(existingData));
            }
            const newData = JSON.stringify(data);
            const updatedData = [...dataArray, newData];
            return AsyncStorage.setItem('Users', JSON.stringify(updatedData));
        } catch (error) {
            console.error('Error', error);
        }
    }
);
//////////////// login
export const login = createAsyncThunk("users/login", async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const loginData = await AsyncStorage.getItem('Users')
        const checkLogin=await JSON.parse(loginData).map(JSON.parse).find((item)=>item.email===data.email)
        console.log('checkLogin',checkLogin)
        if (checkLogin) {
            if (checkLogin.email===data.email&&checkLogin.password===data.password) {
                console.log('checkLogin.email===data.email&&checkLogin.password===data.password',checkLogin.email===data.email&&checkLogin.password===data.password)
                // await AsyncStorage.setItem('UserData', JSON.stringify(checkLogin));
                return checkLogin;
            } else {
                throw new Error('email or password you entered is incorrect');
            }
        } else {
            throw new Error('Please sign up and login again');
        }
    } catch (error) {
        return rejectWithValue('email or password you entered is incorrect');
    }
});

/////////// Start Slice Spacial Users
const initialState = {
    usersData: [],
    loading: false,
    error: false,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.loading = false;
                state.usersData = action.payload;
            })
            .addCase(signUp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.usersData = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

    },
});

export default usersSlice.reducer;