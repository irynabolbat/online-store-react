import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";
import './Pagination.css'

export const Pagination = ({
    cardsPerPage, 
    setCurrentPage, 
    currentPage, 
    items, 
    searchValue, 
    searсhBrand, 
    searсhCategory, 
    priceValue, 
    ratingValue
}) => {

    const pageNumbers = []

    const scroll = () => {
        window.scrollTo(0, 0)
    }

    const filteredCards = items
        .filter(item => {
            return priceValue[0] <= item.price  &&  item.price <= priceValue[1]
        })
        .filter(item => {
            return ratingValue[0] <= item.rating  &&  item.rating <= ratingValue[1]
        })
        .filter(item => {
            return searсhCategory.includes(item.category) || searсhCategory.length === 0 
        })
        .filter(item => {
            return searсhBrand.includes(item.brand) || searсhBrand.length === 0 
        })
        .filter(item => {
            if(item.title.toLowerCase().includes(searchValue.toLowerCase())){
                return true
            } else { 
                return false
            }
        })  

    for(let i = 1;  i <= Math.ceil(filteredCards.length / cardsPerPage); i++){
        pageNumbers.push(i)
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        scroll();
    }

    const nextPage = () => {
        setCurrentPage(id => id + 1);
        scroll();
    }
    
    const prevPage = () => {
        setCurrentPage(id => id - 1);
        scroll();
    }

    if(pageNumbers < 1){
        return(
            <div>
                <div className="noProducts"></div>
            </div>
        ) 
    } else{
    return (
        <div className="pagination-wrapper">
            <div className="pagination">

                <a onClick={currentPage === 1 ? isDisabled : prevPage} className="page left-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                    </svg>
                </a>

                {
                    pageNumbers.map(number => (
                        <a id={number} key={number} className={currentPage === number ? "page active" : "page"} onClick={() => paginate(number)}>
                            {number}
                        </a>
                    ))
                }

                <a onClick={currentPage === Math.ceil(filteredCards.length / cardsPerPage) ? isDisabled : nextPage } className="page right-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                    </svg>
                </a>
            </div>
        </div>
    )}
}