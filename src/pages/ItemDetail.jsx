import React, { useState, useEffect } from "react";
import "@styles/ItemDetail.scss";
import { useParams } from "react-router-dom";
import { getItemDetail } from "@services/items";

export default function ItemDetail() {
  const { id } = useParams();

  const [detail, setDetail] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getItemDetail(id).then((Response) => {
      setDetail(Response.item);
      setCategories(Response.categories);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="categories">
          <ul className="">
            {categories.map((c, index) => {
              return (
                <li key={c}>
                  {c}
                  {index + 1 !== categories.length ? <span> {">"} </span> : ""}
                </li>
              );
            })}
          </ul>
        </div>

        {detail.id ? (
          <div className="card">
            <div className="left-item">
                <div className="row">
                    <img className="img-detail" alt="" src={detail.picture} />
                </div>
                <div className="row">
                    <div className="item">
                        <div className ="description">
                            <h2>Descripción del producto</h2>
                            <p>{detail.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-item">
            <div >
                <div className="item-id">
                    {detail.condition == "new" ? (<p>Nuevo - {detail.sold_quantity} vendidos</p>) 
                    : (<p>{detail.condition} - {detail.sold_quantity} vendidos</p>) }
                    <h2>{detail.title}</h2>
                    <h1>$ {detail.price.amount}</h1>
                    <button className="button-compra">Comprar</button>
                </div>
            </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
