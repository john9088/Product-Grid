import {React} from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom';

const ProductGrid = ({ itemData }) => {
    if(itemData)
        return(
            <div className='product-grid-main'>
                {itemData.items.map((data, itr) => (
                    <Link  key={itr} style={{ textDecoration: 'none', color:'#000000' }} to={`/product/${data.productId}`}>
                        <ProductCard data={data}/>
                    </Link>
                ))}
            </div>
        )
    else
        return(<div>No product found of this category</div>)
}
export default (ProductGrid)