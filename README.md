# Test Practico Frontend

Esta aplicación es una simulación para una tienda, en donde se realiza una petición con un parametro de busqueda y se obtienen los resultados del mismo.

En esta plataforma encontrara un buscador de texto en donde podra ingresar palabras claves con el objetivo de encontrar productos que tengan coincidencia. Al hacer clic en cada producto podra observar el detalle del mismo, como su imagen, nombre, precio y descripción.

## Estrategia de diseño de aplicaciones

Esta aplicación está diseñada para consumir un servicio de API REST utilizando React integrado con Node Js y archivos de configuración para declarar rutas, configuraciones, y componentes.

Esta aplicación se ha desarrollado utilizando React con router-dom, sass, babel, webpack etc., este proyecto está destinado a obtener y consumir API REST que manejen solicitudes http y devuelvan respuestas http json válidas.

## Iniciemos

Siga los subtemas a continuación para configurar su entorno, ejecutar el servidor web y trabajar con los puntos finales de la API Rest.

#### Requisitos del sistema operativo
Asegúrese de que se cumplan los siguientes requisitos antes de comenzar.

- Cliente git

#### Clonar el repositorio

```sh
git@github.com:Daniela10289/ml-shop-front.git
```

#### Instalar dependencias backend

para instalar las depencias que se encuentran en el archivo package.json es necesario ejecutar el siguiente comando

- npm install

#### Iniciar el servidor web

Ejecute la siguiente línea para iniciar el servidor

```sh
npm run start
```

## Realización de solicitudes HTTP a las API REST expuestas

Una vez inciados ambos servidores ml-shop-back y ml-shop-front en su terminal, se abrira una nueva pestaña en su navegador por defecto.
En la pantalla principal podra realizar las siguiente solicitudes

| Vista | URL |
| ------ | ------ |
| Inicio | http://localhost:3000/ |
| Vista | ![](docs/assets/home.png) |
| Lista de procuctos | http://localhost:3000/item?search=Iphod |
| Vista | ![](docs/assets/list.png) |
| Detalle del producto | http://localhost:3000/item/MLA899138095?search=Iphod |
| Vista | ![](docs/assets/detail.png) |