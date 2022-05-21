// react
import { Dispatch, FC, MouseEvent, MouseEventHandler } from 'react';

// interfaces
import { IReservationCardProps } from './interfaces';

// react-redux imports
import { useDispatch, useSelector } from 'react-redux';

// rtk
import { AnyAction } from '@reduxjs/toolkit';

// features
import { addCustomer, removeReservation } from '../../features';

// app directory
import { RootState } from '../../app/';

// component definition
const ReservationCard: FC<IReservationCardProps> = ({
    name,
    index
}: IReservationCardProps): JSX.Element => {
    // global state
    const reservations = useSelector(
        (state: RootState) => state.reservations.value
    );

    // action dispatchers
    const dispatch: Dispatch<AnyAction> = useDispatch();

    // event handlers
    const handleRemoveReservation: MouseEventHandler<HTMLDivElement> = (
        event: MouseEvent
    ) => {
        event.preventDefault();

        const newCustomer: string = reservations[index];

        dispatch(removeReservation(index));

        // Add the index's value to the customers reducer slice
        dispatch(addCustomer(newCustomer));
    };

    return (
        <div
            className="reservation-card-container"
            onClick={handleRemoveReservation}
        >
            {name}
        </div>
    );
};

// exports
export default ReservationCard;
