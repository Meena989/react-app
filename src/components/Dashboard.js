import React from 'react';
import img5 from '../assets/img5.jpg';
import Navbar from './Navbar'; 
import Search from './Searchbar';
import Menu from './Menu';
import Bestexps from './Bestexps';
//import Hotels from './Hotels';
function Dashboard(){
    return(
        
        <div fluid className="dashboard">
            <div>
            <Navbar/>
            </div>
            <div className="content">
            
                <div className="topSec">
                    <div >
                    <Search/>
                    </div>
                <div className="prof">
                    Hello, User <img className="imge" src={img5} alt={"xyz"}/>
                </div>
                </div>
            <div className="box-menu">
                <Menu/>
            </div>
                <div className="Exp">
                    <Bestexps/>
                </div>
                
            </div>
            </div>
    )
}
export default Dashboard;