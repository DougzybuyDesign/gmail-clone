import React from "react";
import "/App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidbar";
import Widgets from "./Widgets";
import {useStateValue} from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();

  return (
    //BEM naming convention
<div className="app">
  {user ? (
<Login/>
  ):(
<>
      {/*Header*/}
      <Header />
      <div className="app__body">
        {/* App body*/}
        <Sidebar />
        {/*Sidebar*/}
        <Feed />
        {/* Feed*/}
<Widgets/>

        {/* Widgets*/}
      </div>
    </>
  )
}
</div>
  );

export default App;
