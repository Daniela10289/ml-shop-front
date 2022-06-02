# Test Práctico Frontend

Esta aplicación es una simulación para una tienda, en donde se realiza una petición con un parámetro de búsqueda y se obtienen los resultados del mismo.

En esta plataforma encontrará un buscador de texto en donde podrá ingresar palabras claves con el objetivo de encontrar productos que tengan coincidencia. Al hacer clic en cada producto podrá observar el detalle del mismo, como su imagen, nombre, precio y descripción.

## Estrategia de diseño de aplicaciones

Esta aplicación está diseñada para consumir un servicio de API REST utilizando React integrado con Node Js y archivos de configuración para declarar rutas, configuraciones, y componentes.

Esta aplicación se ha desarrollado usando React con router-dom, sass, babel, webpack etc., este proyecto está destinado a obtener y consumir API REST que manejen solicitudes http y devuelvan respuestas http json válidas.

## Estrategia de SEO

Para la estrategia de SEO se utilizó la librería react-document-meta la cual facilita la configuración de los atributos HTML en las diferentes secciones de la aplicación.

## Iniciemos

Siga los subtemas a continuación para configurar su entorno, ejecutar el servidor web y trabajar con los puntos finales de la API Rest.

#### Requisitos del sistema operativo
Asegúrese de que se cumplan los siguientes requisitos antes de comenzar.

- Cliente git

#### Clonar el repositorio

```sh
git@github.com:Daniela10289/ml-shop-front.git
```

#### Instalar dependencias

Para instalar las dependencias que se encuentran en el archivo package.json es necesario ejecutar el siguiente comando

```sh
npm install
```

- En su sistema operativo debe tener instalado Node >= v16.14.2 con npm 

#### Iniciar el servidor web

Ejecute la siguiente línea para iniciar el servidor

```sh
npm run start
```

## Accediendo a las rutas de la aplicación disponibles

Una vez iniciados ambos servidores ml-shop-back y ml-shop-front en su terminal, se abrirá una nueva pestaña en su navegador por defecto.
En la pantalla principal podrá realizar las siguientes solicitudes

| Vista | URL |
| ------ | ------ |
| Inicio | http://localhost:3000/ Ingresar un parámetro de búsqueda en el buscador que se encuentra en la parte superior |
| Vista | ![](docs/assets/home.png) |
| Lista de productos | http://localhost:3000/item?search=Funko Se observa la lista de productos según el parámetro ingresado en el buscador |
| Vista | ![](docs/assets/list.png) |
| Detalle del producto | http://localhost:3000/item/MLA1138926015?search=Funko Se observa el detalle del producto seleccionado |
| Vista | ![](docs/assets/detail.png) |

# Pruebas unitarias

Esta sección explica cómo ejecutar las pruebas unitarias del proyecto

#### Estrategia de prueba

Escribir casos de prueba específicos antes de comenzar el desarrollo de la funcionalidad es una excelente manera de ahorrar validaciones o extensiones de alcance innecesarias, siguiendo la ideología de Jest he escrito casos de prueba específicos para validar cada componente necesario para la funcionalidad de la aplicación.

#### Ejecutando las pruebas unitarias

Para iniciar los casos de prueba es necesario ejecutar el siguiente comando

```sh
npm test
```

Una vez ejecutado el comando se podrá observar en la terminal los resultados de cada prueba.

![](docs/assets/result-test.png)

# Pruebas e2e

Las pruebas e2e fueron realizadas con la herramienta cypress, la cual es una herramienta muy poderosa para realizar pruebas e2e y pruebas de integración en aplicaciones web.

#### Estrategia de prueba

La estrategia utilizada para las pruebas e2e fue realizar la simulación de acciones que un usuario de la aplicación realizaría desde que ingresa al sitio, realiza una búsqueda (en este caso ingresando el parámetro "Funko pop"), observa los resultados obtenidos por el servidor backend, da clic al primer resultado encontrado y posteriormente es dirigido al detalle del producto donde se encuentra información como categorías, título, precio, descripción y opción de compra, etc.

#### Requisitos necesarios para las pruebas e2e

- Tener iniciado el servidor del backend y el fronted con sus respectivos comandos de inicio
- Una vez lista la configuración de cypress ejecute el siguiente comando en una terminal nueva en la raíz de este proyecto frontend.

```sh
npm run test:e2e
```
Nota: En caso de que este comando falle, puede ser posible que una configuración previa en su sistema operativo de cypress sea necesaria en caso de que no cumpla con este requisito, siga las instrucciones de la [Documentación oficial](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)

Al ejecutar este comando se podrá observar el resultado de las pruebas desde la terminal

![](docs/assets/result-e2e.png)

Para visualizar el proceso de las pruebas desde la interfaz gráfica de cypress, ejecute el siguiente comando

```sh
npm run test:cypress_open
```

El siguiente gif muestra el proceso para ejecutar las pruebas manualmente e ilustra el proceso de las pruebas e2e y sus resultados.

![](docs/assets/gif-e2e.gif)