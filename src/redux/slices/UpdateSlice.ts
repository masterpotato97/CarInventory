import { createSlice } from '@reduxjs/toolkit'

const upSlice = createSlice({
    name: "update",
    initialState: {
        updatename:"Update Name",
        updatemake: "update Car make",
        updatecarmodel: "Update Car Model",
        updateaddress: "Update Address"
    },
    reducers: {
        updateName:(state, action) => { state.updateaddress = action.payload},
        updateMake: (state, action) => { state.updatemake = action.payload},
        updateCarmodel: (state, action) => { state.updatecarmodel = action.payload},
        updateAddress: (state, action) => { state.updateaddress = action.payload}
       
    }
})


export const reducer = upSlice.reducer;
export const {updateName, updateMake, updateCarmodel, updateAddress} = upSlice.actions