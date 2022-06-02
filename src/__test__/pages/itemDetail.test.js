import React from "react";
import App from "@routes/App";
import { screen } from '@testing-library/react';
import {renderWithRouter} from "../helpers";
import {server} from "../../__mocks__/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('Prueba de componente ItemDetail', async () => {
    /*
    Este caso de prueba busca comprobar que al seleccionar uno 
    de los items de la lista se ilustre en pantalla el detalle como 
    la imágen, título, precio, descripción y el botón de compra que
    retornará el servicio.
    */

    renderWithRouter(<App />, {route: '/item/1'});

    // Verificando si el buscador existe en pantalla
    const searchInput = screen.queryByPlaceholderText(/Nunca dejes de buscar/i);
    expect(searchInput).toBeInTheDocument();

    // Verificando si el rol que va a contener las categorias existe
    expect(screen.getByRole("categories-ul")).toBeInTheDocument();
    
    // Verificando si existe la imagen del item
    const itemsImgs = await screen.findByRole('img-id');
    expect(itemsImgs).toBeInTheDocument();

    //  Verificar si el title del item es el que se selecciono
    expect(screen.getByText(/1 dummy/i)).toBeInTheDocument();
    
    // Verificando el precio del item esperado
    expect(screen.getByText(/6500/i)).toBeInTheDocument();

    // Verificando la descripción del item
    expect(screen.getByText(/ESTANTERIA DE PINO/i)).toBeInTheDocument();

    // Verificando que el boton se encuentre presente el documento
    expect(screen.getByRole("button-detail")).toBeInTheDocument();
});


