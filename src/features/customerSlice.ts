// rtk
import {
    AnyAction,
    createSlice,
    PayloadAction,
    Reducer
} from '@reduxjs/toolkit';

// interfaces
import { ICustomerSliceInitState } from './interfaces';

// initialState
const initialState: ICustomerSliceInitState = {
    customers: []
};

// slice definition
const customerSlice = createSlice({
    name: 'Customers',
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<string>) => {
            state.customers.push(action.payload);
        },
        removeCustomer: (state, action: PayloadAction<number>) => {
            state.customers.splice(action.payload, 1);
        }
    }
});

// exports
const customerReducer: Reducer<ICustomerSliceInitState, AnyAction> =
    customerSlice.reducer;

const { addCustomer, removeCustomer } = customerSlice.actions;

export { customerReducer, addCustomer, removeCustomer };
