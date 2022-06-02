import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";

export const server = setupServer(
  rest.get("http://localhost:8080/api/items", (req, res, ctx) => {
    const search = req.url.searchParams.get("search");
    return res(
      ctx.json({
        author: {
          name: "Daniela",
          lastname: "Palacio Perez",
        },
        categories: ["a", "b", "c"],
        items: [
          {
            id: 1,
            title: `${search} dummy`,
            price: {
              currency: "ARS",
              amount: 6500,
              decimals: 1,
            },
            picture: "assets",
            condition: "new",
            free_shipping: true,
            sold_quantity: 50,
            city_name: "Buenos Aires",
          },
        ],
      })
    );
  }),
  rest.get("http://localhost:8080/api/items/:id", (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.json({
        author: {
          name: "Daniela",
          lastname: "Palacio Perez",
        },
        categories: ["a", "b", "c"],
        item: {
          id: id,
          title: `${id} dummy`,
          price: {
            currency: "ARS",
            amount: 6500,
            decimals: 1,
          },
          picture: "assets",
          condition: "new",
          free_shipping: true,
          sold_quantity: 50,
          city_name: "Buenos Aires",
          description: "ESTANTERIA DE PINO",
        },
      })
    );
  })
);
