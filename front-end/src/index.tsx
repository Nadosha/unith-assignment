import React from 'react';
import ReactDOM from 'react-dom/client';

import store from "@Redux/store";
import App from "./App";
import {Provider} from "react-redux";
import {Theme} from "@radix-ui/themes";
import ErrorBoundary from "@Components/ErrorBoundary";
import {SkeletonTheme} from "react-loading-skeleton";

import './index.scss';
import '@radix-ui/themes/styles.css';
import 'react-loading-skeleton/dist/skeleton.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <Provider store={store}>
                <SkeletonTheme baseColor="#E4E4E4" highlightColor="#F5F5F7">
                    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
                        <App/>
                    </Theme>
                </SkeletonTheme>
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
);
