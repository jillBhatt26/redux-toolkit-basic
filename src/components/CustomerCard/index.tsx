// react
import {
    useState,
    ChangeEvent,
    FC,
    MouseEvent,
    MouseEventHandler
} from 'react';

// react-redux
import { useDispatch } from 'react-redux';

// features
import { addFood, removeCustomer } from '../../features';
import { IAddFoodAction } from '../../features/interfaces';

// interfaces imports
import { ICustomerCardProps } from './interfaces';

const CustomerCard: FC<ICustomerCardProps> = ({
    name,
    index,
    customerID,
    food
}: ICustomerCardProps) => {
    // component states
    const [foodInput, setFoodInput] = useState<string>('');

    // action dispatchers
    const dispatch = useDispatch();

    // event handlers
    const handleRemoveCustomer: MouseEventHandler = (event: MouseEvent) => {
        event.preventDefault();

        dispatch(removeCustomer(index));
    };

    const handleAddFood: MouseEventHandler<HTMLButtonElement> = (
        event: MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();

        if (!foodInput.length) {
            return alert('Please add a food item to order!');
        }

        const addFoodItem: IAddFoodAction = {
            customerID,
            food: foodInput,
            index
        };

        dispatch(addFood(addFoodItem));

        setFoodInput('');
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
                <div className="customer-food">
                    {food.length > 0 ? (
                        food.map((foodItem: string, idx: number) => (
                            <p key={idx}>{foodItem}</p>
                        ))
                    ) : (
                        <>No orders placed!</>
                    )}
                </div>
                <div className="customer-food-input-container">
                    <input
                        value={foodInput}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                            setFoodInput(event.target.value)
                        }
                    />
                    <button onClick={handleAddFood}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default CustomerCard;
