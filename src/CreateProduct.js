import React, { Component } from 'react'
import axios from 'axios'
import { Link  } from 'react-router-dom'

export default class CreateProduct extends Component {
  constructor() {
    super()
    this.state = {
        name: '',
        price: '',
        discountPercentage: '',
        availability: 'instock'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = (obj) => {
    // console.log(obj.target.name, obj.target.value)
    this.setState({
          [obj.target.name]: obj.target.value
    })
    // console.log('CURRENT STATE :', this.state)
  }

handleSubmit = (evt) => {
    evt.preventDefault()
    const res = axios.post('/api/products', this.state)
    this.setState({
        name: '',
        price: '',
        discountPercentage: '',
        availability: ''
    })
    // //redirect
    // if (this.state.discountPercentage.length > 0){
    //     this.props.history.push('/products/sales');
    // }
    // else {
    //     this.props.history.push('/products')
    // }

    // set next key id and cause rerender props
    // console.log(this.props.products)
    console.log('before: ', this.props.products)
    let nextVal = this.state
    nextVal.id = this.props.products.length + 1
    this.props.products.push(nextVal)
    console.log('after: ', this.props.products)


    //redirect
    if (this.state.discountPercentage.length > 0){
        console.log('discounts')
        this.props.history.push('/products/sales');
    }
    else {
        this.props.history.push('/products')
    }
}

  render() {
    // const { product } = this.state
    // console.log(product)

    return (
        <form onSubmit={this.handleSubmit}>
        <div>
            <label htmlFor="name"> Name </label>
                <input className="form-control" name="name" type="text" onChange={this.handleChange} value={this.state.name} />
                <div />
        </div>
        <div>
            <label htmlFor="price">Price</label>
                <input className="form-control" name="price" type="text" onChange={this.handleChange} value={this.state.price} />
                <div />
        </div>
        <div>
            <label htmlFor="discountPercentage">Discount Percentage</label>
                <input className="form-control" name="discountPercentage" onChange={this.handleChange} value={this.state.discountPercentage} />
                <div />
        </div>
        <div>
            <label htmlFor="availability">Availability</label>
                {/* <input className="form-control" name="availability" type="text" onChange={this.handleChange} value={this.state.availability} /> */}
                <select className="form-control" name="availability" type="text" selected="instock" placeholder="instock" defaultValue="instock" onChange={this.handleChange}>
                    <option value="instock">instock</option>
                    <option value="backordered">backordered</option>
                    <option value="discontinued">discontinued</option>
                </select>
                <div />
        </div>
        <button className="btn btn-primary" style={ {marginTop: '10px'} } type="submit" disabled={!this.state.name || !this.state.price || !this.state.availability} >
        Submit
        </button>
        </form>
    )
  }
}
