// 1. Встановлення залежностей:
// npm install @reduxjs/toolkit react-redux redux-thunk

import { createSlice, createAsyncThunk, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import axios from 'axios';
import { TypedUseSelectorHook } from 'react-redux';

// 2. Типізація стану
interface Post {
  id: number;
  title: string;
}

interface DataState {
  items: Post[];
  loading: boolean;
  error: string | null;
}

// 3. Асинхронна дія для отримання даних
export const fetchData = createAsyncThunk<Post[]>('data/fetchData', async () => {
  const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  return response.data;
});

// 4. Slice зі станом та обробкою асинхронних дій
const dataSlice = createSlice({
  name: 'data',
  initialState: { items: [], loading: false, error: null } as DataState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});

// 5. Налаштування стору
const store = configureStore({
  reducer: { data: dataSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

// 6. Типізація хуків
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// 7. Компонент, що використовує асинхронну дію
const DataComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

// 8. Головний компонент з провайдером
const App: React.FC = () => (
  <Provider store={store}>
    <DataComponent />
  </Provider>
);

export default App;