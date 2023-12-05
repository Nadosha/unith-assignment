import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk('posts/fetchItems', async () => {
    try {
        const response = await fetch('http://localhost:3001/data');

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        return response.json();
    } catch (error: any) {
        throw new Error(error.message);
    }
});

