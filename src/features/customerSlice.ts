// rtk
import {
    AnyAction,
    createSlice,
    PayloadAction,
    Reducer
} from '@reduxjs/toolkit';

// interfaces
import {
    IAddFoodAction,
    ICustomer,
    ICustomerSliceInitState
} from './interfaces';

// initialState
const initialState: ICustomerSliceInitState = {
    customers: []
};

// slice definition
const customerSlice = createSlice({
    name: 'Customers',
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<ICustomer>) => {
            state.customers.push(action.payload);
        },
        removeCustomer: (state, action: PayloadAction<number>) => {
            state.customers.splice(action.payload, 1);
        },
        addFood: (state, action: PayloadAction<IAddFoodAction>) => {
            const customer: ICustomer = state.customers[action.payload.index];

            customer!.food = [...customer!.food, action.payload.food];

            state.customers[action.payload.index] = customer;
        }
    }
});

// exports
const customerReducer: Reducer<ICustomerSliceInitState, AnyAction> =
    customerSlice.reducer;

const { addCustomer, removeCustomer, addFood } = customerSlice.actions;

export { customerReducer, addCustomer, removeCustomer, addFood };
