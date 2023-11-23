import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import ProductsList from './components/ProductsList'
import UpdateProduct from "./pages/UpdateProduct";
import CreateProduct from "./pages/CreateProduct";
import Header from "./components/Header";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<ProductsList/>} exact/>
                {/*<Route path="/products/:id" exact element={<ProductsList/>}/>*/}
                <Route path="/products/:id/edit" element={<UpdateProduct/>}/>
                <Route path="/products/create" element={<CreateProduct/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
