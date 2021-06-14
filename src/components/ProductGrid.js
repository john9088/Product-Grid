import {React} from 'react'
import { connect } from 'react-redux'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom';

const ProductGrid = ({ itemData }) => {
    return(
        <div className='product-grid-main'>
            {itemData.items.map((data, itr) => (
                <Link  key={itr} to={`/product/${data.productId}`}>
                    <ProductCard data={data}/>
                </Link>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        itemData: state.data,
    }
}
export default connect(mapStateToProps)(ProductGrid)