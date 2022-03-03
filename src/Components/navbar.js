import React,{Component} from 'react'
import "./navbar.css"
import {MenuItems} from "./MenuBar"




class Navbar extends Component  {  
  state ={clicked:false}   
  handleclick =()=>{
    this.setState({clicked:!this.state.clicked})
  }
  
  render(){
  return (
   <nav className='Navlink-navbar'>
     <h1 className="nav-logo">MY portfolio</h1>
       
     
     <div className='menuIcon' onClick={this.handleclick}>
       <i className={this.state.clicked ? "fas fa-times":"fas fa-bars"}></i>
     </div>
     <ul className={this.state.clicked ?"nav-menu active":"nav-menu"}>
       {
         MenuItems.map((item,index)=>{
           return(
             <li key={index}>
             <a className={item.cName} href={item.url}>
             {item.title}
             </a>
             </li>
           )
         }
         )
        }
         
       </ul>
     
       
       
   </nav>
  )
}
}

export default Navbar