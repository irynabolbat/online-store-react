import React from "react";
import Card from '../card/Card'


export const CardsList = ({
    items, searchValue, searсhCategory, searсhBrand, 
    firstCardsIndex, lastCardIndex, priceValue, ratingValue
}) => {

    return (
        <div className="card-in-list row">
            {   
                items.filter(item => {
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
                .slice(firstCardsIndex, lastCardIndex)
                .map((item) => {
                    return <Card
                        item={item}
                        key={item.id}
                        id={item.id}
                        img={item.images[0]}
                        rating={item.rating}
                        price={item.price}
                        title={item.title}
                        category={item.category}
                        brand={item.brand}
                    />})
                }
        </div>
    )
}