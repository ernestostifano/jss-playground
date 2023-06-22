import {JssProvider, SheetsRegistry} from 'react-jss';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app';
import reportWebVitals from './reportWebVitals';

const registry = new SheetsRegistry()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <JssProvider registry={registry}>
            <App registry={registry} />
        </JssProvider>
    </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
