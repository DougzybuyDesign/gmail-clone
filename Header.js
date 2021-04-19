import React from "react";
import "/src/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Avatar, IconButton } from "utils@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from "./StateProvider";




function Header () {
const [{user}, dispatch]= useStateValue();


  return( <div className="header">
  <div className="header__left">
<img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"alt=""/>
<div className="header_input">
<SearchIcon/>
<input placeholder="Search__Facebook" type="text"/>
  </div>
  <div className="header__center">
<div className="header__option header__option__active">
<HomeIcon fontSize="large"/>
</div>
<div className="header__option">
<FlagIcon fontSize="large"/>
</div>
<SubscriptionOutlinedIcon fontSize="large"/>
</div>
<StorefrontOutlinedIcon fontSize="large"/>
</div>

<SupervisedUserCircleOutlinedIcon fontSize="large"/>

  <div className="header__right">
<div className="header__info">
  <Avavtar src={user.photoURL}/>
  <h4>user.displayName</h4>
<div>
<IconButton>
  <AddIcon/>

</IconButton>
<IconButton>
  <ForumIcon/>

</IconButton>
<IconButton>
  <NotificationsActiveIcon/>
</IconButton>
<IconButton>
  <ExpandMoreIcon/>
</IconButton>





</div

})
);
  



export default Header;