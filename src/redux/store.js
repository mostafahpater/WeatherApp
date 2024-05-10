import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "./slicers/UsersSlice";
import WeatherSlice from "./slicers/WeatherSlice";

const store = configureStore({
    reducer: {
        users: UsersSlice,
        weather: WeatherSlice,
    },
  });

export default store;