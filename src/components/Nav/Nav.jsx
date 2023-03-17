import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";


const Nav= (props)=>{
    
return(
<div>
    <div>
      <Link to="/about">About</Link>
      <Link to="/home">Home</Link>
    
    <Link to="/"><button>Desloguearse</button></Link>

    </div>
    <SearchBar onSearch={props.onSearch}/>
</div>
)    
}

export default Nav;