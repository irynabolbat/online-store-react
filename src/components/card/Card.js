import React from "react";
import { connect } from 'react-redux'
import './Card.css'
import star from '../../img/Star.png'
import { addItem } from '../../redux/actions/cartAction'

const Card = ({item, img, rating, price, title, category, brand, id, addItem}) => {

    return (
        <div className="card-wrapper" brand={brand} id={id} key={id}>
            <img src={img} alt={category} className="card-product" />
            <div className="rating col-6">
                <p>
                    {rating}
                    <img src={star} alt='rating stars' />
                </p>
            </div>
            <div className="product-price">
                {price} грн
            </div>
            <h5 className="product-name">
                {title}
            </h5>

            <p className="product-category">
                {category}
            </p>
            <button className="btn-add" onClick={() => addItem(item)}>ADD TO CART</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Card)