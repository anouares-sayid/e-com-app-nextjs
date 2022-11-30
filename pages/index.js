import React from 'react'
import PropTypes from 'prop-types'
import product from '../sanity-e-com-react-app/schemas/product'
import {Product, FooterBanner,Footer, HeroBanner} from '../components/'
import {client} from '../lib/client'
function home(props) {
  return (
    <>
    
    <HeroBanner heroBanner={props.banners[0]}/>
    <div className='products-heading'>
      <h2>
    Best Selling Products
      </h2>
      <p>
    Iphones of many variations
      </p>
    </div>
    <div className='products-container'>
     {props.products?.map((product)=>product.name)}
    </div>
    <FooterBanner/>
    </>
  )
}

home.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object),
}

export const getServerSideProps = async () => {
  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);
  const bannersQuery = '*[_type == "banner"]';
  const banners = await client.fetch(bannersQuery);
  return {
    props: {products,banners}
  }
}
export default home
