import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductForm extends Component {
    // You will need to keep this state in this component
    // if you're only using something in one component,
    // you do not need to move it to redux
    state = {
        productToAdd: {name: '', price: 0}
    }

    handleInputChange = (event, propertyName) => {
        this.setState({
            productToAdd: {
                ...this.state.productToAdd,
                [propertyName]: event.target.value
            }
        })
    }

    addProduct = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_NEW_PRODUCT', payload: this.state.productToAdd})
    }

    render() {
        return (
            <form onSubmit={this.addProduct}>
                <input onChange={(event) => this.handleInputChange(event, 'name')} type="text" placeholder="name" />
                <input onChange={(event) => this.handleInputChange(event, 'price')} type="text" placeholder="price" />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default connect()(ProductForm);