import {React} from 'react'

const ProductCard = ({data}) => {
    return(
        <div className='product-card'>
            <div>
                <img src={data.displayImg} alt={'Hello'}/>
            </div>
            <div className='product-card-info'>
                <table cellPadding='10' cellSpacing='10' >
                    <tbody>
                        <tr>
                            <th align='LEFT'>Name:</th>
                            <td>{data.name}</td>
                        </tr>
                        <tr>
                            <th align='LEFT'>Size:</th>
                            <td>test</td>
                        </tr>
                        <tr>
                            <th align='LEFT'>Price:</th>
                            <td>test</td>
                        </tr>
                        <tr>
                            <th align='LEFT'>SKU:</th>
                            <td>test</td>
                        </tr>
                        <tr>
                            <th align='LEFT'>VAT:</th>
                            <td>{data.vat}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductCard