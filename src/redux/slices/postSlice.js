// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getPosts = createAsyncThunk(
//   "post/getPosts",
//   async (params, { dispatch, getState }) => {
//     try {
//       const reponse = await axios.get(
//         "https://64a6ad14096b3f0fcc8042cd.mockapi.io/posts",
//         {
//           params: {
//             page: params.page || 1,
//             limit: 5,
//           },
//         }
//       );
//       return reponse.data;
//     } catch (error) {
//       // error.response.data là format của axios
//       throw error.response.data;
//     }
//   }
// );

// const postSlice = createSlice({
//   name: "post",
//   initialState: {
//     posts: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {},
//   // Bắt và xử lý các action được dispatch từ createAsyncThunk
//   extraReducers: (builder) => {
//     builder.addCase(getPosts.pending, (state) => {
//       state.isLoading = true;
//     });

//     builder.addCase(getPosts.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.posts = action.payload;
//     });

//     builder.addCase(getPosts.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.error.message;
//     });
//   },
// });

// export default postSlice.reducer;




import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
  "post/getPosts",
  async (params, { dispatch, getState }) => {
    try {
      const reponse = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return reponse.data;
    } catch (error) {
      // error.response.data là format của axios
      throw error.response.data;
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  // Bắt và xử lý các action được dispatch từ createAsyncThunk
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });

    builder.addCase(getPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default postSlice.reducer;
