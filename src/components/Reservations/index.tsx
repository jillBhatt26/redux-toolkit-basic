import { AnyAction } from '@reduxjs/toolkit';
import {
    ChangeEvent,
    ChangeEventHandler,
    Dispatch,
    MouseEventHandler,
    MouseEvent,
    useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/';
import { addReservation } from '../../features';
import ReservationCard from './ReservationCard';

const Reservations = () => {
    // global states
    const reservations = useSelector(
        (state: RootState) => state.reservations.value
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
        event: MouseEvent<HTMLButtonElement>
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
        <div className="reservation-container">
            <div>
                <h5 className="reservation-header">Reservations</h5>
                <div className="reservation-cards-container">
                    {reservations.length > 0 ? (
                        reservations.map((name: string, idx: number) => (
                            <ReservationCard
                                name={name}
                                key={idx}
                                index={idx}
                            />
                        ))
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
    );
};

export default Reservations;
