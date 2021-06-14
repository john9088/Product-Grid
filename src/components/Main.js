import React from 'react'
import ProductGrid from './ProductGrid'
import {Switch, Route, Redirect} from 'react-router-dom'
import ProductView from './product-view-page/ProductView'
import '../customCSS/mainProductGrid.css'
import '../customCSS/mainproductView.css'
import { connect } from 'react-redux'


const Main = ({itemData}) => {
    const ProductWithId = ({match}) => {
        console.log(match.params.productId)
        let selectedProduct = itemData.items.filter(data => data.productId == match.params.productId)
        return(
            <ProductView data={selectedProduct[0]}/>
        );
    };
    return(
    <>
        <Switch>
            <Route path='/productPage' component={() => <ProductGrid itemData={itemData}/>} />
            <Route path='/product/:productId' component={ProductWithId} />
            <Redirect to='/productPage'/>
        </Switch>
    </>
    )
}


const mapStateToProps = (state) => {
    return {
        itemData: state.data,
    }
}

export default connect(mapStateToProps)(Main)