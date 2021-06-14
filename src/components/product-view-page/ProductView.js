import React from 'react'
import ProductImageCarosel from './ProductImageCarosel'
import ProductDescription from './ProductDescription'
import { connect } from 'react-redux'


const ProductView = ({ data }) => {
    console.log(data)
    return(
        <div className='product-view-main'>  
            {/*For image gallery*/}
            <div className='product-image-carosel'>
                <ProductImageCarosel 
                    data={data}
                />
            </div>
            {/*For product description*/}
            <div className='product-description'>
                <ProductDescription 
                    data={data}
                />
            </div>
        </div>
    )
}

export default (ProductView)