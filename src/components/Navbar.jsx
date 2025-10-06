import React from 'react';
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
// import Link from "next/link";

const NavbarStyle = () => {
    const cartProducts = useSelector(state => state.cart);

    return (
        <div>
            <Navbar fluid rounded>
                <NavbarBrand href="">
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"> Redux Tollkit</span>
                </NavbarBrand>
                <div className="flex md:order-2">
                    <NavbarLink as={Link} to="/cart" className='text-white'>My BAgg {cartProducts.length}</NavbarLink>
                    <NavbarToggle />
                </div>
                <NavbarCollapse>
                    <NavbarLink as={Link} to="/" active>
                        Home
                    </NavbarLink>
                    <NavbarLink as={Link} to="/products">Products</NavbarLink>


                </NavbarCollapse>
            </Navbar>
        </div>
    )
}

export default NavbarStyle