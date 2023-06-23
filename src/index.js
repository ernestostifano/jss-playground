import {JssProvider, SheetsRegistry} from 'react-jss';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app';

const registry = new SheetsRegistry()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <StrictMode>
        <JssProvider registry={registry}>
            <App registry={registry} />
        </JssProvider>
    </StrictMode>
);
