import React from "react";
import { CatCheckbox } from "./checkboxes/CatCheckbox";
import {BrandCheckbox} from "./checkboxes/BrandCheckbox"
import { PriceSlider } from "./sliders/PriceSlider";
import { RatingSlider } from "./sliders/RatingSlider";
import './SideBar.css'
import { ClearFiltersBtn } from "./ClearFiltersBtn/ClearFiltersBtn";

export const SideBar = ({
    items, searсhCategory, setSearchCategory, searсhBrand, 
    setSearchBrand, setCurrentPage, minPrice, maxPrice, 
    priceValue, setPriceValue, minRating, maxRating, ratingValue, 
    setRatingValue, setSearchValue
}) => {
    return (
        <div>
            <div className="side-box">
                <PriceSlider 
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    priceValue={priceValue}
                    setPriceValue={setPriceValue}
                    setCurrentPage={setCurrentPage} 
                />

                <CatCheckbox 
                    items={items} 
                    searсhCategory={searсhCategory} 
                    setSearchCategory={setSearchCategory} 
                    setCurrentPage={setCurrentPage} 
                />
                <hr />

                <BrandCheckbox
                    items={items}
                    searсhBrand={searсhBrand}
                    setSearchBrand={setSearchBrand}
                    setCurrentPage={setCurrentPage}
                />
                <hr />

                <RatingSlider 
                    minRating={minRating}
                    maxRating={maxRating}
                    ratingValue={ratingValue}
                    setRatingValue={setRatingValue}
                    setCurrentPage={setCurrentPage} 
                />
            </div>

            <ClearFiltersBtn 
                setSearchValue={setSearchValue} 
                setSearchCategory={setSearchCategory} 
                setSearchBrand={setSearchBrand}
                setPriceValue={setPriceValue}
                setRatingValue={setRatingValue}
            />
        </div>
    )
}