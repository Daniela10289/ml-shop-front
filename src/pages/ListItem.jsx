import React, {useState, useEffect} from 'react';
import axios from "axios";
import "@styles/ListItem.scss";
import { useSearchParams,  } from "react-router-dom";
import freeShippingImg from "@assets/ic_shipping.png";

export default function ListItem() {  
  
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search");

    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

     const getItems = (search) => {
        return axios
          .get(`http://localhost:8080/api/items/?search=${search}`)
          .then((res) => {
            console.log(res);
            return res.data
          })
          .catch((error) => {
            console.log("error!!! " + error);
            return []
          });
      };

      useEffect(() => {
        getItems(search).then((itemResponse) => {
          setItems(itemResponse.items);
          setCategories(itemResponse.categories);
        })
      }, [search]);



    return (
        <div className="container">
            <div className="row">
            <div className="categories">
              <ul className="">
              {categories.map((c, index) => {
                return (
                  <li key={c}>{c}{(index+1) !== categories.length ? <span> {'>'} </span>  : '' }</li>
                )
              })}
              </ul>
            </div> 
            {items.map((item) => {
                return (                    
                  <div className="cards"key={item.id}>
                  <div className="items">
                    <img className="img1" src={item.picture} alt="" />
                    <div className="items-left">
                      <h2>$ {item.price.amount} 
                      {item.free_shipping === true ? <img className="freeShippingImg" src={freeShippingImg}/> : ""} </h2>                      
                      <p>{item.title}</p>
                    </div>
                    <div className="items-right">
                      <span>{item.city_name}</span>
                    </div>                 
                  </div>
              </div>
                )
            })} 
              
                
            </div>
        </div>
    )
}