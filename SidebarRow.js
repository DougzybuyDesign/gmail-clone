import React from "react";
import { Avatar,} from "utils@material-ui/core";



function SidebarRow({src,Icon,title}) {
return (
  <div className="sidebarRow">
    {src && <Avatar src={src}/>}
    {Icon && <Icon/>}
    <h4>{titile}</h4>



    <div/>
);
}
export default SidebarRow;