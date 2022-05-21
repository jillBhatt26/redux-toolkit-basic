// css
import './App.css';

// components
import Reservations from './components/Reservations';
import Customers from './components/Customers';

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <Reservations />
                <Customers />
            </div>
        </div>
    );
};

export default App;
