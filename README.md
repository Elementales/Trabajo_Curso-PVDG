# README

* Se crea repositorio GitHub llamado **Trabajo_Curso-PVDG**
* Se registran en el repositorio los avances de su código (commits y push respectivos).
* Se publicar Online el proyecto, mediante GitHub Pages.

El proyecto contiene 2 módulos principales, para cada uno de ellos se indican los correspondientes scripts de JavaScripts, lo que se puede ver en el archivo html que genera la visualización.

## MÓDULOS 

## 1. Web Scrapping: Extracción de información de página web
En esta parte se realizó una extracción de datos a través d web scrapping en 
URL = 'https://www.rastro.com/resultado.html?q=&cl=1001&c=&Optz=&t='

A partir de esta extracción se generaron 2 archivos CSV para generar 2 visualizaciones:

**a) Gráfico 1 de Líneas (UsoAutos.csv); y**

**b) Gráfico 2 de Barras (MarcaAutos.csv)**

En la página se pueden descargar ambos archivos.

* Se realizó web scrapping con **Nodejs**, usando la librería _**cheerio**_ para escanear el contenido html de la web y obtener el dato que se requería.

* Para la creación de los gráficos se utilizó la librería **Charts.js**, la cual está escrita en código JavaScript y utiliza canvas, un elemento de HTML5 que permite crear gráficos a través de scripts.

* Chart.js genera archivos que están disponibles enCDNJS: https://cdnjs.com/libraries/Chart.js
* Chart.js genera archivos que están disponibles a través dejsDelivr:https://www.jsdelivr.com/package/npm/chart.js?path=dist

## **Instalación**

* Chart.js fue instalado vía npm

* npm install chart.js --save


## 2. Procesamiento de información de archivo Excel: XSLX Reader

En esta parte, el procedimiento utilizado fue leer y procesar un archivo en formato Excel, xlsx Reader, a partir del cual, en combinación con un archivo de formato **Geojson** con las regiones de Chile (con las respectivas coordenadas), se pudo generar un Mapa para visualizar en él los datos contenidos en el archivo Excel (Teniendo en común el nombre de las regiones). 
El archivo excel contiene datos referentes a proyectos adjudicados en el marco de Concursos gestionados por el Programa Regional de CONICYT. A partir de este archivo y el Geojson de regiones de Chile se generó un Json.

Para la creación del mapa con la capa base se utilizó la librería **Leaflet**, la cual está escrita en código JavaScript.

El procedimiento inicial para la creación del mapa fue el siguiente:

## Creación del mapa

var map = L.map('myMap').setView(MAP_CENTER, MAP_ZOOM)

## Creación de la capa base

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map)

## VISUALIZACIÓN
La URL de la página web donde se muestran las visualizaciones obtenidas a través de ambos métodos (1. y 2.), así como los archivos generados en cada caso, es la siguiente:

https://elementales.github.io/Trabajo_Curso-PVDG/

Ubicación del repositorio donde se encuentran los archivos: https://github.com/Elementales/Trabajo_Curso-PVDG

Nota: Se recomienda ejecutar en navegador FireFox.

