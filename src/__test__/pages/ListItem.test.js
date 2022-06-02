import React from "react";
import App from "@routes/App";
import {screen } from '@testing-library/react';
import {renderWithRouter} from "../helpers";
import {server} from "../../__mocks__/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test('Prueba de componente ListItem', async () => {
    /*
    Este caso de prueba busca comprobar que la búsqueda se realice al servicio Mock
    y que se ilustren en pantalla la imágen y el título esperado en el item que 
    retornará el servicio.
    */

    renderWithRouter(<App />, {route: '/item?search=funko'});

    // Verificando si el buscador existe en pantalla
    const searchInput = screen.queryByPlaceholderText(/Nunca dejes de buscar/i);
    expect(searchInput).toBeInTheDocument();

    // Verificando si el rol que va a contener las categorias existe
    expect(screen.getByRole("categories-ul")).toBeInTheDocument();
    
    // Verificando si existen imagenes para items retornados por el API mock
    const itemsImgs = await screen.findByRole('img-id');
    expect(itemsImgs).toBeInTheDocument();

    //  Verificar si existe un item que tenga como title funko dummy
    expect(screen.getByText(/funko dummy/i)).toBeInTheDocument();
    
    // Verificando el precio del item esperado
    expect(screen.getByText(/6500/i)).toBeInTheDocument();
    
});


