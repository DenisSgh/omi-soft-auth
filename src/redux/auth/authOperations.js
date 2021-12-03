import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { invalidRequest, successRequest } from 'services/pnotify/notifications';

axios.defaults.baseURL = 'https://site.ualegion.com/api/v1';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/security/login', credentials);
      token.set(data.token);
      successRequest('Logged in successfully!');

      return data.token;
    } catch (error) {
      invalidRequest(
        'Invalid data entered! Check if you entered your email and password correctly',
      );
      return rejectWithValue(error);
    }
  },
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      token.unset();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.post('/security/login');
      return data.token;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// export const fetchCurrentUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, { getState, rejectWithValue }) => {
//     const state = getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return rejectWithValue();
//     }

//     token.set(persistedToken);

//     try {
//       const { data } = await axios.get('/security/login');
//       return data.token;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );
