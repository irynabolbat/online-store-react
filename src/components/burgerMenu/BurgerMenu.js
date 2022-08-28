import React, {useState} from "react";
import './BurgerMenu.css'
import { SideBar } from "../Side-bar/SideBar";
import { ClearFiltersBtn } from "../Side-bar/ClearFiltersBtn/ClearFiltersBtn";

export const BurgerMenu = ({
    items, setItems, searсhCategory, 
    setSearchCategory, searсhBrand, 
    setSearchBrand, setCurrentPage, minPrice, maxPrice, priceValue, setPriceValue, minRating, maxRating,
    ratingValue, setRatingValue, setSearchValue
}) => {
    const [modalSideBarActive, setModalSideBarActive] = useState(false)

    return (
        <div onClick={() => setModalSideBarActive(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list burgerMenu" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>

            <div className={modalSideBarActive ? "modal-side-bar active" : "modal-side-bar"} onClick={() => setModalSideBarActive(true)}>
                <div className={modalSideBarActive ? "modal-content-side-bar active" : "modal-content-side-bar"} onClick={e => e.stopPropagation()}>

                    <div>
                        <div className="close-side-bar" onClick={() => setModalSideBarActive(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                            </svg>
                        </div>

                        <SideBar 
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
                        <ClearFiltersBtn 
                            setSearchValue={setSearchValue} 
                            setSearchCategory={setSearchCategory} 
                            setSearchBrand={setSearchBrand}
                            setPriceValue={setPriceValue}
                            setRatingValue={setRatingValue}
                        />
                        <div className="apply">
                            <button className="btn-apply" onClick={() => setModalSideBarActive(false)}>APPLY FILTERS</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}