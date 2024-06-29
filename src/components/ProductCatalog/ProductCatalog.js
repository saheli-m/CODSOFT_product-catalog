import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCatalog.css';

const products = [
  {
    "id": 1,
    "name": "Classic Vanilla Bean",
    "description": "Immerse yourself in the timeless taste of creamy vanilla ice cream. Flecks of real vanilla bean dance on your tongue, offering a pure and nostalgic sweetness that never goes out of style.",
    "price": 3.99,
    "image": "https://i.imgur.com/Rh4fnjD.jpeg"
  },
  {
    "id": 2,
    "name": "Coffee Chocolate Chip",
    "description": "A robust awakening for your taste buds! Rich coffee ice cream awakens your senses, while generous chunks of dark chocolate chips deliver a delightful contrast of textures and a satisfyingly bitter-sweet finish.",
    "price": 4.39,
    "image": "https://i.imgur.com/kwStsrJ.jpeg"
  },
  {
    "id": 3,
    "name": "Butterscotch Ripple",
    "description": "Imagine creamy vanilla ice cream swirled with ribbons of pure butterscotch bliss. This flavor is a symphony of sweet and buttery notes, leaving you wanting more with every bite.",
    "price": 4.19,
    "image": "https://i.imgur.com/IfRbj6Q.jpeg"
  },
  {
    "id": 4,
    "name": "Mint Chocolate Chip",
    "description": "Refresh your day with the invigorating cool of mint ice cream. Each refreshing scoop is studded with dark chocolate chips, creating a delightful balance of sweet and minty with a satisfying crunch.",
    "price": 4.29,
    "image": "https://i.imgur.com/klC4NVO.jpeg"
  },
  {
    "id": 5,
    "name": "Salted Caramel Pecan",
    "description": "Indulge in a symphony of textures and tastes. Buttery salted caramel ice cream swirls with rich caramel sauce, while crunchy pecan pieces add a delightful textural contrast and a nutty finish.",
    "price": 4.99,
    "image": "https://i.imgur.com/nlEqsU2.jpeg"
  },
  {
    "id": 6,
    "name": "Mango Tango Sorbet",
    "description": "Escape to the tropics with this vibrant and refreshing vegan sorbet. Bursting with the natural sweetness of real mangoes, this flavor is a taste of sunshine that will tantalize your senses.",
    "price": 4.19,
    "image": "https://i.imgur.com/BxNT4Oc.jpeg"
  },
  {
    "id": 7,
    "name": "Coffee Toffee Crunch",
    "description": "A decadent treat for coffee lovers! Deep, rich coffee ice cream is studded with swirls of creamy toffee sauce and crunchy toffee bits, creating a delightful explosion of flavors and textures in every bite.",
    "price": 4.59,
    "image": "https://i.imgur.com/mZFEXko.jpeg"
  },
  {
    "id": 8,
    "name": "Cookies & Cream",
    "description": "A timeless classic with a playful twist. Creamy vanilla ice cream is studded with delicious chocolate sandwich cookie pieces, offering a delightful combination of creamy and crunchy textures with a burst of chocolatey goodness in every bite.",
    "price": 3.99,
    "image": "https://i.imgur.com/YiZgQtU.jpeg"
  },
  {
    "id": 9,  
    "name": "Strawberry Swirl",
    "description": "Savor the taste of summer with this delightful treat. Sweet strawberry ice cream is swirled with tangy strawberry sauce, creating a refreshing and vibrant symphony of flavors that bursts with juicy goodness.",
    "price": 3.79,
    "image": "https://i.imgur.com/xVtocKe.jpeg"
  },
  {
    "id": 10,
    "name": "Pistachio Almond Joy",
    "description": "A luxurious and exotic adventure for your taste buds! Creamy pistachio ice cream is studded with chunks of crunchy almonds and decadent chocolate swirls, offering a delightful combination of nutty, chocolatey, and floral notes.",
    "price": 4.79,
    "image": "https://i.imgur.com/Jwfv5JB.jpeg"
  },
  {
    "id": 11,
    "name": "Berry Blast",
    "description": "A burst of summer sweetness awaits! This vibrant mix of mixed berry ice cream is packed with real fruit chunks, offering a refreshing explosion of flavors that will tantalize your taste buds.",
    "price": 4.29,
    "image": "https://i.imgur.com/VtbLZok.jpeg"
  },
  {
    "id": 12,
    "name": "Chocolate Chip Dough",
    "description": "Indulge in your childhood dreams with this irresistible treat. Vanilla ice cream is packed with chunks of chewy chocolate chip cookie dough, offering a delightful combination of creamy and doughy textures with pockets of melty chocolate goodness.",
    "price": 4.49,
    "image": "https://i.imgur.com/I2qkPjx.jpeg"
  },  
  {
    "id": 13,
    "name": "Butter Pecan",
    "description": "A classic comfort food with a touch of sophistication. Creamy vanilla ice cream is generously studded with roasted pecans, offering a delightful contrast of textures and a nutty finish that is both comforting and satisfying.",
    "price": 3.89,
    "image": "https://i.imgur.com/DCAWPhq.jpeg"
  },
  {
    "id": 14,
    "name": "Chocoholic Fudge Brownie",
    "description": "Calling all chocolate lovers! This decadent treat features rich chocolate ice cream loaded with chunks of decadent fudge brownie. It's a double dose of chocolatey bliss that will leave you wanting more.",
    "price": 4.49,
    "image": "https://i.imgur.com/wSe0dMb.jpeg"
  },
  {
    "id": 15,
    "name": "Rocky Road",
    "description": "Embark on a chocolatey adventure! This classic flavor features chocolate ice cream loaded with marshmallows, almonds, and chocolate chunks, offering a delightful combination of chewy, crunchy, and creamy textures with a burst of chocolatey goodness in every bite.",
    "price": 4.79,
    "image": "https://i.imgur.com/nK7K81E.jpeg"
  },  
  { "id": 16,
    "name": "Strawberry Cheesecake",
    "description": "A taste of pure indulgence! Creamy strawberry ice cream is swirled with cheesecake and graham cracker pieces, offering a delightful combination of creamy, tangy, and crumbly textures with a burst of strawberry sweetness.",
    "price": 4.59,
    "image": "https://i.imgur.com/EWNpIe2.jpeg"
  }
]

function ProductCatalog({ addToCart }) {
  const navigate = useNavigate();

  return (
    <div className='main mt-2'>
      <div className='d-flex justify-content-between ms-3 me-3 mt-3'>
        <h1>Scoops of Happiness</h1>
          <div className='d-flex' onClick={() => navigate('/cart')}>
            <i className="fa-solid fa-cart-plus"></i>
            <p className='cart'>Cart</p>
          </div>
      </div>
      {/*  */}
      <div className="product-catalog">
        {products.map((product) => (
          <div
          key={product.id}
          className="product-item"
          role="button"
          tabIndex={0}
          onClick={() => {
            navigate(`/product-details/${product.id}`);
          }}
        >
          <div className="card">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <p className="card-title">{product.name}</p>
              <p className="card-text"><b>${product.price}</b></p>
              <button
                onClick={(event) => { event.stopPropagation(); addToCart(product); }}
                className="btn btn-outline-primary"
              >
                <b>Add to Cart</b>
              </button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog;


