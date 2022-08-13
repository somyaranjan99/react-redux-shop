import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux/es/exports'
import {setProducts} from '../redux/action/productAction';
import Productcomponnent from './Productcomponent';
import axios from 'axios'
const Productlisting=()=>{
    const dispatch= useDispatch();
    const fetchAllproducts=async ()=>{
        const response= await axios.get("https://fakestoreapi.com/products").catch(error=>console.log(error));
        dispatch(setProducts(response.data))
    }
    useEffect(()=>{
        fetchAllproducts()    
    },[dispatch])
    return(<div className='container  mt-100'>
        <div className='row'>
      
            <Productcomponnent />
      
        
        </div>
        </div>)
}
export default Productlisting