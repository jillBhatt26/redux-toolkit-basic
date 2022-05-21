// react
import {
    useState,
    ChangeEventHandler,
    ChangeEvent,
    MouseEventHandler,
    MouseEvent,
    Dispatch
} from 'react';

// react-redux
import { useDispatch, useSelector } from 'react-redux';

// css
import './App.css';

// app directory
import { RootState } from './app/';

// components
import ReservationCard from './components/ReservationCard';
import CustomerCard from './components/CustomerCard';

// features
import { addReservation } from './features';

// rtk
import { AnyAction } from '@reduxjs/toolkit';
import { ICustomer } from './features/interfaces';

const App = () => {
    // global states
    const reservations = useSelector(
        (state: RootState) => state.reservations.value
    );

    const customers = useSelector(
        (state: RootState) => state.customers.customers
    );

    // action dispatcher
    const dispatch: Dispatch<AnyAction> = useDispatch();

    // component states
    const [reservationInput, setReservationInput] = useState<string>('');

    // reservation event handlers
    const handleReservationsInputChange: ChangeEventHandler<
        HTMLInputElement
    > = (event: ChangeEvent<HTMLInputElement>) => {
        setReservationInput(event.target.value);
    };

    const handleAddReservation: MouseEventHandler<HTMLButtonElement> = (
        event: MouseEvent
    ) => {
        event.preventDefault();

        if (!reservationInput.length) {
            return alert('Please enter the name to reserve!');
        }

        // Dispatch action to add the name to state
        dispatch(addReservation(reservationInput));

        setReservationInput('');
    };

    return (
        <div className="App">
            <div className="container">
                <div className="reservation-container">
                    <div>
                        <h5 className="reservation-header">Reservations</h5>
                        <div className="reservation-cards-container">
                            {reservations.length > 0 ? (
                                reservations.map(
                                    (name: string, idx: number) => (
                                        <ReservationCard
                                            name={name}
                                            key={idx}
                                            index={idx}
                                        />
                                    )
                                )
                            ) : (
                                <p>No Reservations found</p>
                            )}
                        </div>
                    </div>
                    <div className="reservation-input-container">
                        <input
                            value={reservationInput}
                            onChange={handleReservationsInputChange}
                        />
                        <button onClick={handleAddReservation}>Add</button>
                    </div>
                </div>

                <div className="customer-food-container">
                    <h5
                        className="reservation-header"
                        style={{ marginLeft: 20 }}
                    >
                        Customers
                    </h5>
                    {customers.length > 0 ? (
                        customers.map((customer: ICustomer, idx: number) => (
                            <div key={idx} style={{ marginLeft: 5 }}>
                                <CustomerCard
                                    name={customer.name}
                                    index={idx}
                                    customerID={customer.id}
                                    food={customer.food}
                                />
                            </div>
                        ))
                    ) : (
                        <p style={{ marginLeft: 20 }}>No customers available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
