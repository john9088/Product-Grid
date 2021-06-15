import React from 'react'
import ProductImageCarosel from './ProductImageCarosel'
import ProductDescription from './ProductDescription'


const ProductView = ({ data }) => {
    if(data)
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
    else
        return(<div>Data Not found for the product</div>)
}

export default (ProductView)