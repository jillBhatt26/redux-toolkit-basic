// react
import { FC, MouseEvent, MouseEventHandler } from 'react';

// react-redux
import { useDispatch } from 'react-redux';

// features
import { removeCustomer } from '../../features';

// interfaces imports
import { ICustomerCardProps } from './interfaces';

const CustomerCard: FC<ICustomerCardProps> = ({
    name,
    index
}: ICustomerCardProps) => {
    // action dispatchers
    const dispatch = useDispatch();

    // event handlers
    const handleRemoveCustomer: MouseEventHandler = (event: MouseEvent) => {
        event.preventDefault();

        dispatch(removeCustomer(index));
    };

    return (
        <div className="customer-food-card-container">
            <p>{name}</p>

            <b
                style={{
                    float: 'right',
                    marginTop: '-20px',
                    cursor: 'pointer'
                }}
                onClick={handleRemoveCustomer}
            >
                X
            </b>

            <div className="customer-foods-container">
                <div className="customer-food"></div>
                <div className="customer-food-input-container">
                    <input />
                    <button>Add</button>
                </div>
            </div>
        </div>
    );
};

export default CustomerCard;
