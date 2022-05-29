import React, {useState, useEffect} from 'react';
import axios from "axios";
import "@styles/ListItem.scss";

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
                                                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}