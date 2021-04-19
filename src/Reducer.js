export const initialState ={
user: null,
};
export const actionTypes = {
SET_USER: "SET_USER",
};
const reducer = (state, action) => {
console.log(action)=> {
switch (action.typer){
case actionTypes.SET_USER:
  return {
...state.SET_USERuser: action.user.SET_USER};
default:
  return state;
  }
};

