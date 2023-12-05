import React, {useEffect} from 'react';
import {RouterProvider} from "react-router-dom";
import router from "@Utils/router";
import {useAppDispatch} from "@Redux/store";
import {fetchItems} from "@Redux/actions";

const App = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    return (
        <RouterProvider
            router={router}
            fallbackElement={<div>Loading...</div>}
        />
    );
}

export default App;
