import React from "react";
import RectDom from "react-dom";
import "./index.css";
import App from "./App;";
import * as serviceWorker from "./serviceWorker";
import { StateProvider } from "./src/StateProvider";
import reducer, {initialState} from "./rducer";

ReactDOM.render(

<React.StrictMode>
<StateProvider>
<App/>
</StateProvider>
</React.StrictMode>
document.getElementById("root")
);



serviceWorker.unregister();