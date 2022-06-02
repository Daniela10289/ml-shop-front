import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import ListItem from "../pages/ListItem";
import ItemDetail from "../pages/ItemDetail";
import NotFound from "../pages/NotFound";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="item" element={<ListItem />} />
        <Route exact path="item/:id" element={<ItemDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
