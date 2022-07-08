import React from "react";
import { connect } from 'react-redux'
import './Card.css'
import star from '../../img/Star.png'
import { addItem } from '../../redux/actions/cartAction'
import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

const Card = ({item, img, rating, price, title, category, brand, id, addItem}) => {

    const addNotification = () => {
        Store.addNotification({
            title: "Product adde to the cart!",
            message: 'Your product has been successfully added to the cart!',
            type: 'success',
            container: 'top-center',
            insert: 'bottom',
            animationIn: 'zoon-in',
            animationOut: 'zoom-out',
            dismiss: {
                duration: 2000,
                showIcon: true
            },
            width: 300
        })
    }

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
            <button className="btn-add" onClick={() => {addItem(item); addNotification()}}>ADD TO CART</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Card)