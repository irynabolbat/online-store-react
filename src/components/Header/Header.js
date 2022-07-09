import React, { useState } from "react";
import { connect } from 'react-redux'
import './Header.css'
import Cart from "../Cart/Cart";
import { BurgerMenu } from "../burgerMenu/BurgerMenu";

const Header = ({itemsCount, 
    items, setItems, searсhCategory, 
    setSearchCategory, searсhBrand, 
    setSearchBrand, setCurrentPage, minPrice, maxPrice, priceValue, setPriceValue, minRating, maxRating,
    ratingValue, setRatingValue, setSearchValue
}) => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div>
            <div className="header-wrapper">

                <div className='menu'>
                    <BurgerMenu
                        items={items} 
                        setItems={setItems} 
                        searсhCategory={searсhCategory} 
                        setSearchCategory={setSearchCategory} 
                        searсhBrand={searсhBrand}
                        setSearchBrand={setSearchBrand}
                        setCurrentPage={setCurrentPage}

                        minPrice={0} maxPrice={85000}
                        priceValue={priceValue}
                        setPriceValue={setPriceValue}
                        minRating={0} maxRating={5}
                        ratingValue={ratingValue}
                        setRatingValue={setRatingValue}

                        setSearchValue={setSearchValue}
                    />
                </div>


                <div className="headerDiv"></div>

                <h1 className="header headerName">Online Store</h1>

                <div className="headerDivMiddle"></div>

                    <button className="header-btn-cart" onClick={() => setModalActive(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart cart_icon" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                        CART {itemsCount===0 ? '' : itemsCount}
                    </button>
                    <Cart active={modalActive} setActive={setModalActive} />
                    
                <div className="headerDiv"></div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    itemsCount: state.cart.cartItems.reduce((acc, item) => acc += item.quantity, 0)
});

export default connect(mapStateToProps)(Header)