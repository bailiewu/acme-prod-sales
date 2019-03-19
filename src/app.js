import React, {Component} from 'react';
import axios from 'axios'
import { HashRouter, Route } from 'react-router-dom';
import Products from './Products'
import Nav from './nav'
import CreateProduct from './CreateProduct'

const home = () => {
    return <h2>Welcome!!</h2>
}

export default class App extends Component{
    constructor(){
        super()
        this.state = {
            products: []
        }
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    async componentDidMount() {
        try {
          const prodResponse = await axios.get('/api/products');
          this.setState({ products: prodResponse.data });
        } catch (error) {
          console.error(error);
        }
    }
    async deleteProduct(id) {
        // eslint-disable-next-line react/no-access-state-in-setstate
        let products = this.state.products
        products = products.filter(product => product.id != id);
        const res = await axios.delete(`/api/products/${id}`)
        this.setState({ products });
    }


    render(){
        const {products} = this.state
        return (
            <HashRouter>
                <h1>Acme Products/Sales</h1>
                <Route render={(props) => <Nav {...props} products={products} />} />
                <Route exact path ="/" component = {home} />
                <Route exact path ="/products" render={(props) => <Products {...props} products={products} deleteProduct={this.deleteProduct} />} />
                <Route exact path ="/products/sales" render={(props) => <Products {...props} products={products.filter( (product) => product.onSale)} deleteProduct={this.deleteProduct} />} />
                <Route exact path ="/products/create" render={(props) => <CreateProduct {...props} products={products} />} />
            </HashRouter>
        )
    }
}

