// imports
import {
    AnyAction,
    createSlice,
    PayloadAction,
    Reducer
} from '@reduxjs/toolkit';

// interfaces
import { IReservationSliceInitState } from './interfaces';

// initial state
const initialState: IReservationSliceInitState = {
    value: []
};

// slice definition
const reservationSlice = createSlice({
    name: 'reservations',
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload);
        },
        removeReservation: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1);
        }
    }
});

// reducer exports
const reservationReducer: Reducer<any, AnyAction> = reservationSlice.reducer;

// actions exports
const { addReservation, removeReservation } = reservationSlice.actions;

export { reservationReducer, addReservation, removeReservation };
