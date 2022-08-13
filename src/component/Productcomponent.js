import React from 'react'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import "./Productcomponent.css"
const Productcomponnent=()=>{
  const productCount= useSelector((state)=>state);

    const products=useSelector((state)=>state.allproducts.products)
    
    const renderCard = Object.keys(productCount).length==0 ?(<div>Loading...</div>):( products && products.map((ele)=>{
        const {category,description,id,image,price,rating,title}=ele;
        return(<div className="col-md-4 col-sm-6" key={id}>
        <div className="card mb-30">
            <div className="inner">
              <div className="main-img"><img src={image} alt={category} /></div>
            </div>
          <div className="card-body text-center">
            <h4 className="card-title">{category}</h4>
            <p className="text-muted">${price}</p>
            <p className='card-text'>{description.substring(0,100)+'...'}</p>
            <Link className="btn btn-outline-primary btn-sm" to={`productdetail/${id}`} data-abc="true">View Products</Link>
          </div>
        </div>
      </div>)
    }))
    return(<>
            {renderCard}
    </>)
}
export default Productcomponnent;