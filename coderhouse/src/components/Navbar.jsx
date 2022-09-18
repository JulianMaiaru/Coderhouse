import React from 'react';
import Form from './Form';
import Dropdown from './Dropdown';
import Secciones from './Secciones';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

const Navbar = () => {
 const listDrowdon = ["Ciudadania Reconstruccion", "Ciudadania Hijo Directo", "Ciudadania Via Judicial", "Informacion Comunas"]

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
         <div className="container-fluid"> 
          <div className="collapse navbar-collapse" id="navbarColor01">
           <ul className="navbar-nav me-auto">
            <Secciones/>
            <Dropdown lista={listDrowdon}/>
            <CartWidget/>
           </ul>
           <Form busqueda="Buscar Servicio"/>
          </div>
         </div>
        </nav>
     </>
    );
}

export default Navbar;
