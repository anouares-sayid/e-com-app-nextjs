import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
function HeroBanner(props) {
  const bannerData = props.heroBanner
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{bannerData.smallText}</p>
        <h3>{bannerData.midText}</h3>
        <img src={urlFor(bannerData.image)} alt="iphones" className='hero-banner-image' />
      </div>
      <div>
        <Link href={`/product/${bannerData.product}`}>
           <button type='button'>{bannerData.buttonText}</button>
        </Link>
        <div className='desc'>
          <h1>Description</h1>
          <p>{bannerData.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner