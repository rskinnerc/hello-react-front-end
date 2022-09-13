import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  message: '',
};

export const fetchRandomGreeting = createAsyncThunk(
  'greeting/fetchRandomGreeting',
  async () => {
    const response = await fetch('http://localhost:3000/greetings', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'GET',
    });
    const data = await response.json();
    return data;
  },
);

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchRandomGreeting.fulfilled, (state, { payload }) => {
      const [message] = payload;
      state.message = message;
    });
  },
});

// Action creators are generated for each case reducer function
const { reducer } = greetingSlice;
export default reducer;
