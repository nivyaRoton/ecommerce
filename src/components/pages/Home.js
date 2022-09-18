import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import pic from '../images/delicious-snack-assortment-spoons_23-2148238775.jpg'
import pic1 from '../images/legumes-beans-assortment-different-bowls-light-stone-top-view-healthy-vegan-protein-food_114579-13629.webp'
import pic2 from '../images/front-view-fresh-vegetables-with-greens-dark-table-vegetable-color-ripe-salad_140725-124765.webp'
export const Home = () => {
  return (
    <div>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 mt-0"
          src={pic}
          alt="First slide"
          
          height={"380px"}
          width={"100px"}
        
        />
      
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={pic1}
          alt="Second slide"
          height={"380"}
          width={"100px"}
         
        />
              </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Third slide"
          height={"380"}
          width={"100px"}
        
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
export default Home
