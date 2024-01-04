import { createSlice } from "@reduxjs/toolkit"


const intialState = {
    value: 0
}
export const userSlice = createSlice({
    initialState,
    reducers: {
        increase : (state) => {
            console.log(state+=1)
        },

        decrease : (state) => {
            console.log(state-=1)
        }
    }
})