import React from "react";
import './checkboxes.css'

export const BrandCheckbox = ({items, searсhBrand, setSearchBrand, setCurrentPage}) => {
    
    const handleCheckedBrand = event => {
        const { checked, value } = event.currentTarget;

        setSearchBrand((br) => 
            checked ? [...br, value] : br.filter(val => val !== value)
        );

        setCurrentPage(1);
    }

    return (
        <div>
            <h3 className="checkbox-header">Brand</h3>

            <div className="brang_checkbox">
                {
                    [...new Set(items.map(item => item.brand))].map((item, id)=> (
                        <div className="checkboxes" key={`brand-${id}`}>
                            <input 
                                type="checkbox" 
                                name="brand"
                                className="checkbox" 
                                id={`brand-${id}`} 
                                key={`brand-${id}`} 
                                value={item} 
                                checked={searсhBrand.some(val => val === item)}
                                onChange={handleCheckedBrand}
                            />
                            <label className="label" htmlFor={`brand-${id}`}>{item}</label>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}