import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name:"error",
    initialState:{
        errors:[]
    },
    reducers:{
        addError:(error,action)=>{
            error.errors.push(action.payload)
        },
        addErrors:(error,action)=>{
            error.errors.push(...action.payload)
        },
        removeErrors:(error)=>{
            error.errors = []
        }
    }
})

export const {addError,addErrors,removeErrors} = errorSlice.actions
export default errorSlice