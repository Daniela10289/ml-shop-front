import React, {useState, useEffect} from 'react';
import "@styles/ListItem.scss";
import { useSearchParams,  } from "react-router-dom";
import freeShippingImg from "@assets/ic_shipping.png";
import { Link } from "react-router-dom";
import { getItems } from "@services/items";

export default function ListItem() {  
  
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search");

    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

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
                  <li key={c}>
                    {c}
                    {index + 1 !== categories.length ? (<span> {">"} </span>) : ("")}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="cards-list">
          {items.map((item) => {
            return (
              <Link className="link-item" key={item.id}
                to={{
                  pathname: `/item/${item.id}`,
                  search: `?search=${search}`
                }}>
                <div className="cards">
                  <div className="items">
                    <img className="img1" src={item.picture} alt="" />
                    <div className="items-left">
                      <h2>
                        $ {item.price.amount}
                        {item.free_shipping === true ? (
                          <img className="free-shipping-img" src={freeShippingImg}/> ) : ("")}{" "}
                      </h2>
                      <p>{item.title}</p>
                    </div>
                    <div className="items-right">
                      <span>{item.city_name}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
          </div>

        </div>
      </div>
    );
}