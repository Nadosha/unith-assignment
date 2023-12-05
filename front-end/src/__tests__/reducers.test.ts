import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {AnyAction} from 'redux';
import {RootState} from '@Redux/store';
import {fetchItems} from '@Redux/actions';
import dataReducer, {initialState, selectData, setActive} from '@Redux/reducers';

const middlewares = [thunk];
const mockStore = configureMockStore<RootState, any>(middlewares);

global.fetch = jest.fn();

// Mock localStorage.getItem
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {value: localStorageMock});
describe('dataSlice', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should handle setActive', () => {
        const newState = dataReducer(initialState, setActive(123));

        expect(newState.active).toEqual(123);
    });

    it('should handle fetchItems.fulfilled', async () => {
        const expectedData = [{title: 'Test', description: 'Description', image: 'test.jpg'}];
        (fetch as jest.Mock).mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce(expectedData),
            ok: true, // Indicate a successful response
        });

        const store = mockStore({data: initialState});

        await store.dispatch(fetchItems());

        const actions = store.getActions() as AnyAction[];
        const newState = dataReducer(initialState, actions[1]);

        expect(newState.loading).toEqual(false);
        expect(newState.data).toHaveLength(1);
        expect(newState.data![0].title).toEqual('Test');
    });
    it('dispatches fetchItems.rejected on failed fetch with cached data available', async () => {
        const expectedError = new Error('Test error');
        (fetch as jest.Mock).mockRejectedValueOnce(expectedError);
        localStorageMock.getItem.mockReturnValueOnce(JSON.stringify([{cached: 'data'}]));

        const store = mockStore({data: initialState});

        await store.dispatch(fetchItems());

        const actions = store.getActions() as AnyAction[];
        const newState = dataReducer({...initialState}, actions[1]);

        expect(newState.loading).toEqual(false);
        expect(newState.data).toHaveLength(1);
        expect(newState.error).toEqual(expectedError.message);
        expect(newState.active).toBeNull();
    });

    it('dispatches fetchItems.rejected on failed fetch with no cached data available', async () => {
        const expectedError = new Error('Failed to fetch');
        (fetch as jest.Mock).mockRejectedValueOnce(expectedError);
        localStorageMock.getItem.mockReturnValueOnce(null);

        const store = mockStore({data: initialState});

        await store.dispatch(fetchItems());

        const actions = store.getActions() as AnyAction[];
        const newState = dataReducer({...initialState}, actions[1]);

        expect(newState.loading).toEqual(false);
        expect(newState.data).toHaveLength(0);
        expect(newState.error).toEqual(expectedError.message);
        expect(newState.active).toBeNull();
    });


    it('should handle fetchItems.rejected', async () => {
        const expectedError = new Error('Failed to fetch data. Test error');

        (fetch as jest.Mock).mockRejectedValueOnce(expectedError);

        const store = mockStore({data: initialState});

        await store.dispatch(fetchItems());

        const actions = store.getActions() as AnyAction[];
        const newState = dataReducer({...initialState}, actions[1]);

        // Ensure the data property is still null
        expect(newState.loading).toEqual(false);
        expect(newState.data).toHaveLength(0);
        expect(newState.error).toEqual(expectedError.message);
        expect(newState.active).toBeNull();
    });

    it('should return data = null from the initial RootState', () => {
        const state: RootState = {data: initialState};

        const selectedData = selectData(state);
        expect(selectedData.data).toEqual(initialState.data);
    });
});
