import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Nav extends Component{

    render(){
        const {products} = this.props
        return (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="/" className={`nav-link ${this.props.location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/products" className={`nav-link ${this.props.location.pathname === '/products' ? 'active' : ''}`}>Products {products.length}</Link>
                </li>
                <li className="nav-item">
                    <Link to="/products/sales" className={`nav-link ${this.props.location.pathname === '/products/sales' ? 'active' : ''}`}>Sales {products.filter( (product) => product.onSale).length}</Link>
                </li>
                <li className="nav-item">
                    <Link to="/products/create" className={`nav-link ${this.props.location.pathname === '/products/create' ? 'active' : ''}`}>Create</Link>
                </li>
            </ul>
        )
    }
}
