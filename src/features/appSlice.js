import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channel: {
        channel: null,
        id: null
    },
  },
  reducers: {
    setChannel: (state, action) => {
      state.channel.channel =  action.payload.channel;
      state.channel.id = action.payload.id
    }
  },
});

export const { setChannel } = appSlice.actions;

export const selectChannel = state => state.app.channel.channel;
export const selectId = state => state.app.channel.id;

export default appSlice.reducer;
