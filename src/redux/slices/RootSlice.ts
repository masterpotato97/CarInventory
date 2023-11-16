import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: "Car make",
        carmodel: "Car Model",
        address: "Address"
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload},
        chooseCarmodel: (state, action) => { state.carmodel = action.payload},
        chooseAddress: (state, action) => { state.address = action.payload}
            
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMake, chooseCarmodel, chooseAddress} = rootSlice.actions