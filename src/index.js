import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./components/app/app";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <DevSupport
            ComponentPreviews={ComponentPreviews}
            useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </div>
);


