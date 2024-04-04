import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  password: "",
  authenticate: false,
  isLoading: false,
  error: null,
};

// function authenticateReducer(state=initialState, action){
//      const {type, payload} = action
//      switch(type) {
//         case "LOGIN_SUCCESS":
//             console.log("login success reducer")
//             return {...state, id: payload.id, password: payload.password, authenticate:true}
//         default:
//              return {...state}
//      }
// }

export const login = createAsyncThunk(
  "authenticate/login",
  async ({ id, password }, thunkApi) => {
    try {
      console.log("login success action");
      return { id, password };
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

const authenticateSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    authenticate(state, action) {
      state.id = action.payload.id;
      state.password = action.payload.password;
      state.authenticate = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authenticate = action.payload;
        console.log("authenticate", state.products);
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const authenticateAction = authenticateSlice.actions;
export default authenticateSlice.reducer;
