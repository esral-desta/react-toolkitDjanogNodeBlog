import {configureStore} from "@reduxjs/toolkit"
import blogSLice from "../reducers/blogReducer"
import errorSlice from "../reducers/errorReducre"
import loadingSlice from "../reducers/loadingReducer";
const store = configureStore({
    reducer:{
        "blog": blogSLice.reducer,
        "error":errorSlice.reducer,
        "loading":loadingSlice.reducer
    }
})


export default store;