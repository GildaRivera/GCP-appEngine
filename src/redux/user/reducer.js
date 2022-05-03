import { createSlice } from "@reduxjs/toolkit";
const initState = {
    id:'',
    name:'',
    username:'', // O correo como ustedes deseen
    biografia:'', 
    gravatar:'',
    set:false
}
const slice = createSlice({
   name:"user",
    initialState: {
       user:initState,
    },
    reducers: {

      update: (state, action) => {
        state.user= action.payload;
      },
     reset: (state, action) => {
        state.user= initState;
      },
      
    },
  });
  
  export default slice.reducer;
  
 const {  update, reset } = slice.actions;



  export const userData =
  (user) =>
  async (dispatch) => {
    console.log(user,"---")
    try {
     
      dispatch(update({username:user.username, password:user.password, id:user.id, biografia:user.biografia, gravatar:user.gravatar, name: user.name, set:true}));
    } catch (e) {
      console.log("e: ", e);
      return console.error(e.message);
    }
  };


  export const userDataDelete =
  () =>
  async (dispatch) => {

    try {
     
      dispatch(reset());
    } catch (e) {
      console.log("e: ", e);
      return console.error(e.message);
    }
  };

  