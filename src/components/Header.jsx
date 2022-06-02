import React, { useState } from "react";
import "@styles/Header.scss";
import ic_Search from "@assets/ic_Search.png";
import logo from "@assets/Logo_ML.png";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search");

  const [searchInput, setSearchInput] = useState(search || "");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/item",
      search: "search=" + searchInput,
    });
    return search;
  };

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="header">
            <form className="form" onSubmit={handleOnSubmit}>
              <img src={logo} alt="logo" className="logo" />
              <input
                className="search"
                type="text"
                placeholder="Nunca dejes de buscar"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                id="search-button"
                role="button-id"
                className="button"
                type="submit"
              >
                <img src={ic_Search} alt="search" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
