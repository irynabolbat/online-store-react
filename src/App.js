import React, { useEffect, useState } from 'react';
import './App.css'
import { ReactNotifications } from 'react-notifications-component'
import  Header  from './components/Header/Header';
import { CardsList } from './components/Cards-list/CardsList';
import { Pagination } from './components/pagination/Pagination';
import {SideBar} from './components/Side-bar/SideBar';
import { Search } from './components/Search/Search';
import MyLoader from './components/Skeleton/Skeleton';
import {ClearFiltersBtn} from './components/Side-bar/ClearFiltersBtn/ClearFiltersBtn'


function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [searchValue, setSearchValue] = useState('')
  const [searсhCategory, setSearchCategory] = useState([])
  const [searсhBrand, setSearchBrand] = useState([])

  const [priceValue, setPriceValue] = useState([0, 85000]);
  const [ratingValue, setRatingValue] = useState([0,5]);

  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage] = useState(9)

  useEffect(() => {
    fetch("https://online-store.bootcamp.place/api/products")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardsIndex = lastCardIndex - cardsPerPage;
  
  if(error) {
    return (
      <div className='errorMes'>Error: {error.message}</div>
    )
  } else if (!isLoaded) {
    return <MyLoader />
  } else {
    return (
      <div className="grid-container row">
        {/* <div className="row"> */}
          <div>
            <ReactNotifications />

            <Header
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
          </div>
          <div className="gridDiv"></div>
          <div className='gridLeft'> 
            <div className='sideB'>
              <div className="side-box">
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
              </div>

              <ClearFiltersBtn 
                setSearchValue={setSearchValue} 
                setSearchCategory={setSearchCategory} 
                setSearchBrand={setSearchBrand}
                setPriceValue={setPriceValue}
                setRatingValue={setRatingValue}
              />
              
            </div>
          </div>

          <div 
          className="gridRight">
              <div className=" sr">
                <Search 
                  searchValue={searchValue} 
                  setSearchValue={setSearchValue} 
                  setCurrentPage={setCurrentPage} 
                />
              </div>
              <div className='cardsL'>
              <CardsList 
                  items={items} 
                  setItems={setItems}
                  searсhCategory={searсhCategory} 
                  searсhBrand={searсhBrand}
                  searchValue={searchValue} 
                  firstCardsIndex={firstCardsIndex}
                  lastCardIndex={lastCardIndex}

                  priceValue={priceValue}
                  setPriceValue={setPriceValue}
                  ratingValue={ratingValue}
                  setRatingValue={setRatingValue}
                />
              
                <Pagination 
                  cardsPerPage={cardsPerPage} 
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                  items={items}
                  searсhCategory={searсhCategory} 
                  searсhBrand={searсhBrand}
                  searchValue={searchValue} 
                  priceValue={priceValue}
                  ratingValue={ratingValue}
                />
              </div>
          </div>
          <div className='gridDiv'></div>
        {/* </div> */}
      </div>
    )
  }
}

export default App;
