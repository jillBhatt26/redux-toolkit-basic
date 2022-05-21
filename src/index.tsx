import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// store import
import { store } from './app/';

// Provide the store using the react-redux provider
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
