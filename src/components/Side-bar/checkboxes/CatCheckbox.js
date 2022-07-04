import React, {useState, useEffect} from "react";
import './checkboxes.css'

export const CatCheckbox = ({items, searсhCategory, setSearchCategory, setCurrentPage}) => {
    
    const handleCheckedCategory = event => {
        const { checked, value } = event.currentTarget;

        setSearchCategory((cat) => {
            return checked ? [...cat, value] : cat.filter((val) => val !== value)
        });

        setCurrentPage(1);
    }

    return (
        <div>
            <h3 className="checkbox-header">Category</h3>
                    
            <div className="category_checkbox">
                {
                    [...new Set(items.map(item => item.category))].map((item, id)=> (
                        <div className="checkboxes" key={`category-${id}`}>
                            <input 
                                type="checkbox" 
                                name="category"
                                className="checkbox" 
                                id={`category-${id}`} 
                                key={`category-${id}`} 
                                value={item} 
                                checked={searсhCategory.some((val) => val === item)}
                                onChange={handleCheckedCategory}
                            />
                            <label 
                                className="label" 
                                htmlFor={`category-${id}`} 
                            >
                                {item}
                            </label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}