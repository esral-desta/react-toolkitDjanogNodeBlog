import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name:'loading',
    initialState:true,
    reducers:{
        setLoaded:(loading)=>{
            loading = false
        },
        setLoading:(loading)=>{
            loading=true
        }

    }
})

export const {setLoaded,setLoading} =  loadingSlice.actions
export default loadingSlice