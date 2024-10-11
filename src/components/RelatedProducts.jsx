import React, { useEffect, useState } from 'react';
import { products } from '../assets/assets';  // You're using this 'products', no need for Products from context
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const RelatedProducts = ({ category, subCategory }) => {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

      setRelated(productsCopy.slice(0, 5)); // Limiting to 5 related products
    }
  }, [category, subCategory]); // Include category and subCategory in dependencies

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.map((item, index) => (
          <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
