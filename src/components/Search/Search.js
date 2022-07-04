import React from "react";
import './Search.css'

export const Search = ({searchValue, setSearchValue, setCurrentPage}) => {
    return (
        <div className="search-wrapper">
            <input 
                className="search" 
                type="text" 
                placeholder="Search" 
                value={searchValue}
                onChange={e => {
                    setSearchValue(e.target.value)
                    setCurrentPage(1)
                }} 
            />
        </div>
    )
}