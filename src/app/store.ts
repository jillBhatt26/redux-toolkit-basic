// imports
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';

// reducers imports
import { customerReducer, reservationReducer } from '../features';

// store config
export const store: EnhancedStore = configureStore({
    reducer: {
        // reducers
        reservations: reservationReducer,
        customers: customerReducer
    }
});

// RootState type export
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch type export
export type AppDispatch = typeof store.dispatch;
