import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';


class Checkout extends Component {

    handleCheckout = () => {
        // TODO: Clear the cart and navigate to the product page
        this.props.dispatch({ type: 'CLEAR_CART' })

    }

    render() {
        return (
            <div>
                <h2>Checkout</h2>
                <ul>
                    {this.props.reduxState.checkoutReducer.map((product) => {
                        return <li key={product.name}>{product.name}: {product.price}</li>
                    })}
                </ul>
                <Link to="/">
                    <button onClick={this.handleCheckout}>Checkout</button>
                </Link>
            </div>
        )
    }
}
const putStateOnProps = (reduxState) => ({
    reduxState
})
export default connect(putStateOnProps)(Checkout);