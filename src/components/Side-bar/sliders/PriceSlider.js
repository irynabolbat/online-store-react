import React from "react";
import Slider from '@material-ui/core/Slider';
import './Sliders.css'

export const PriceSlider = ({ minPrice, maxPrice, priceValue, setPriceValue, setCurrentPage }) => {

    const rangeSelector = (event, newValue) => {
        setPriceValue(newValue);
        setCurrentPage(1);
    };

    return (
        <div>
            <h3 className="slider-header">Price</h3>

            <div className="wrapper-range">
                <Slider
                    value={priceValue}
                    onChange={rangeSelector}
                    style={{width: '100%'}}
                    min={minPrice}
                    max={maxPrice}
                />
            </div>

            <div className="fromTo">
                <span className="from">{priceValue[0]} UAH</span> 
                <span className="to">{priceValue[1]} UAH</span>
            </div>
        </div>
    )
}
