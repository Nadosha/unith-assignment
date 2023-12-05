import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from "@Redux/store";
import {fetchItems} from "@Redux/actions";
import {validateJson} from "@Utils/validateJson";
import {DataStateI} from "@Types/DataState";

export const initialState: DataStateI = {
    data: null,
    error: undefined,
    loading: true,
    active: null,
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setActive: (state, action: PayloadAction<number>) => {
            state.active = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            let id = 1;
            const normalizeData = action.payload.map((item: any) => ({
                id: id++,
                title: item.title,
                description: item.description,
                img: item.image,
            }));

            if (action.payload.length > 0) localStorage.setItem('cachedData', JSON.stringify(action.payload));

            state.data = normalizeData;
            state.loading = false;
        });
        builder.addCase(fetchItems.rejected, (state, action) => {
            const string = localStorage.getItem('cachedData');
            const data = validateJson(string);
            let id = 1;
            const normalizeData = data.map((item: any) => ({
                id: id++,
                title: item.title,
                description: item.description,
                img: item.image,
            }));

            state.data = normalizeData;
            state.error = action.error.message;

            state.loading = false;
        });
    },
});

export const selectData = (state: RootState) => {
    return state.data
};

export const {setActive} = dataSlice.actions;

export default dataSlice.reducer;
