import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name:'loading',
    initialState:{value:true},
    reducers:{
        setLoaded:(loading)=>{
            loading.value = false
        },
        setLoading:(loading)=>{
            loading.value = true
        }

    }
})

export const {setLoaded,setLoading} =  loadingSlice.actions
export default loadingSlice