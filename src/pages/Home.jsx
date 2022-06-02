import React from "react";
import "@styles/Home.scss";
import DocumentMeta from "react-document-meta";

const meta = {
  title: "Ml Shop Tienda Virtual",
  description:
    "Ml Shop es una tienda virtual en donde podrá comprar productos de la mejor calidad, además de sus precios increíbles.",
  canonical: "http://localhost:3000",
  meta: {
    charset: "utf-8",
    name: {
      keywords: "enviogratis",
    },
  },
};

export default function Home() {
  return (
    <main>
      <div className="container">
        <h1 className="titulo">Bienvenido a Ml Shop</h1>
        <DocumentMeta {...meta} />
      </div>
    </main>
  );
}
