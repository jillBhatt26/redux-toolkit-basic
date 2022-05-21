export interface IReservationSliceInitState {
    value: string[];
}

export interface ICustomerSliceInitState {
    customers: ICustomer[];
}

export interface ICustomer {
    id: number;
    name: string;
    food: string[];
}

export interface IAddFoodAction {
    customerID: number;
    food: string;
    index: number;
}
