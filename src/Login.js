import React from "react";
import {Button} from "@material-ui/core";
import"./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./Reducer";

function Login() {
const [state, dispatch] = useStateValue();
const signIn = () => {
//sign in
auth 
.signInWithPopup{provider}
.then((result)=> {


dispatch({
type: actionTypes.SET_USER,
user:result.user,
})


})
.catch((error) => alert(error.message));
};
return (
<div className="Login">

<div className="login__logo">
<img src="https://cdn4.vectorstock.com/i/1000x1000/79/78/facebook-logo-icon-vector-29227978.jpg"
alt=""
/>
<img 
src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
alt=""
/>
</div>
<Button type="submit" onClick={signIn}>
Sign signIn </Button>
</div>

)
}

export default Login;