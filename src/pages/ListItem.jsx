import React, {useState, useEffect} from 'react';
import axios from "axios";
import "@styles/ListItem.scss";
import Header from "@components/Header";

export default function ListItem() {    

     const getItems = () => {
        return axios
          .get(`http://localhost:8080/api/items/`)
          .then((res) => {
            console.log(res);
            return res.data
          })
          .catch((error) => {
            console.log("error!!! " + error);
            return []
          });
      };

      console.log(Header.search + "nada");

      const [items, setItems] = useState([]);
      useEffect(() => {
        getItems().then((itemResponse) => {
          setItems(itemResponse);
        })
      }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Author</th>
                                <th>Category</th>
                                <th>Items</th>
                                <th>Picture</th>
                            </tr>
                            {items.map((item) => {
                                return (
                                    <tr key={item.items}>
                                        {/* <td>{item.items}</td> */}
                                        <td>{item.categories}</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                )
                            })}
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}