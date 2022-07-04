import React from "react";
import './ClearFiltersBtn.css'

export const ClearFiltersBtn = ({setSearchValue, setSearchCategory, setSearchBrand, setPriceValue, setRatingValue}) => {
    const clearAllFilters = () => {
        setSearchValue('');
        setSearchCategory([]);
        setSearchBrand([]);
        setPriceValue([0, 85000]);
        setRatingValue([0, 5]);
    }
    return (
        <div className="btn-clear-side-bar">
            <button className="btn_clear" onClick={clearAllFilters}>CLEAR ALL FILTERS</button>
        </div>
    )
}