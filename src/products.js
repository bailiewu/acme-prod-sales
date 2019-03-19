import React, {Component} from 'react';

export default class Products extends Component{

    render(){
        const {products, deleteProduct} = this.props
        const styleLineThrough = (product) => {
            return ({textDecoration: product.onSale ? 'line-through' : ''})
        }
        const sale = (product) => {
            if (product.onSale){
                return (
                    <div>
                    <span className="badge badge-success">
                    {`$${product.salePrice}`}
                    <br />
                    </span>
                    </div >
                )
            }
        }

        return (
            <ul className="list-group">{products.map( (product) => {
                return (
                <li className="list-group-item" key={product.id}>
                {product.name} <br />
                <span style={styleLineThrough(product)} >{`$${product.price}`} <br /> </span>
                {sale(product)}
                <span style={ {marginBottom: '5px'} } className={`${product.availability === 'instock' ? 'badge badge-success' : 'badge badge-warning' }`}> {product.availability}</span> <br />
                <button className="btn btn-danger btn-sm" type="submit" onClick={() => deleteProduct(product.id)}>Delete</button>
                </li>)
            })}
            </ul>
        )
    }
}
