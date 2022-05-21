import { useSelector } from 'react-redux';
import { RootState } from '../../app/';
import { ICustomer } from '../../features/interfaces';
import CustomerCard from './CustomerCard';

const Customers = () => {
    // global states
    const customers = useSelector(
        (state: RootState) => state.customers.customers
    );

    return (
        <div className="customer-food-container">
            <h5 className="reservation-header" style={{ marginLeft: 20 }}>
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
    );
};

export default Customers;
