import React from "react";
import Slider from '@material-ui/core/Slider';
import './Sliders.css'


export const RatingSlider = ({minRating, maxRating, ratingValue, setRatingValue, setCurrentPage}) => {
    
    const rangeSelector = (event, newValue) => {
        setRatingValue(newValue);
        setCurrentPage(1);
    };

    return (
        <div>
            <h3 className="slider-header">Rating</h3>

            <div className="wrapper-range">
                <Slider
                    value={ratingValue}
                    onChange={rangeSelector}
                    style={{width: '100%'}}
                    min={minRating}
                    max={maxRating}
                />
            </div>

            <div className="fromTo">
                <span className="from">{ratingValue[0]}</span> 
                <span className="to">{ratingValue[1]}</span>
            </div>
        </div>
    )
}