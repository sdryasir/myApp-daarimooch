import React from 'react'
import cardImg from '../assets/card.png';

function ProductCard() {
  return (
    <div>
        <div class="card">
        <img src={cardImg} class="card-img-top" alt="..."/>
        <div class="card-body text-center">
             <a href="#" class="btn btn-primary w-100 mb-4">ADD TO CART</a>
            <h5 class="card-title">Card title</h5>
            <p class="card-text">PKR. 789.00</p>
            <span>⭐⭐⭐⭐⭐</span>
        </div>
        </div>
    </div>
  )
}

export default ProductCard