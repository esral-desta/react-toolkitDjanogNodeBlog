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
        removeError:(error,action)=>{
            error.errors.remove(action.payload.id)
        }
    }
})

export const {addError,addErrors,removeError} = errorSlice.actions
export default errorSlice