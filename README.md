# Prueba técnica de serverless, nodejs & aws

_Una prueba técnica para crear servicio POST Y GET en serverless para lambda de AWS_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira la sección de **Despliegue** para conocer como levantar el proyecto.


### Pre-requisitos 📋

_Tener instalado NODEJS y NPM_

* [https://www.npmjs.com/](https://www.npmjs.com/)
* [https://nodejs.org/es/](https://nodejs.org/es/)

### Instalación 🔧

_Ir a la raíz y ejecutar los siguientes comandos:_

_Instalar dependencias_

```
$ npm install
```

_Ejecutar serverless y seguir los pasos_

```
$ serverless
```
_Configura el serverless con las credenciales de AWS_

```
$ serverless config credentials --provider aws --key xxxxxxxxxx --secret xxxxxxxxxx
```

## Ejecutando las pruebas 

_El proyecto levantó dos servicios lambdas que pueden probar por [postman](https://www.postman.com/)_

_En este método GET obtiene los datos del planeta para visualizar, se puede enviar mediante query el número del planeta a visualizar. 
Adicionalmente en el mismo GET hay un atributo llamado my_data donde se muestra los campos seteados por el método POST_
```
GET - https://44918vkn7d.execute-api.us-east-1.amazonaws.com/dev/?planet=2
```
_En este método POST se envía mediante query los datos del planeta que deseas setear al dynamodb, lo cuál lo puedes visualizar desde el get mencionado
previamente_
```
POST - https://44918vkn7d.execute-api.us-east-1.amazonaws.com/dev/?planet=1
```

### Testing ⚙️

_Para ejecutar pruebas unitarias por de los servicio_

```
$ npm run test
```

## Despliegue 📦

_Para hacer desplegar ejecutar lo siguiente_

```
$ sls deploy
```

## Construido con 🛠️

_Aquí las dependencias más importantes_

* [aws-sdk](https://www.npmjs.com/package/aws-sdk)
* [axios](https://www.npmjs.com/package/axios) 
* [express](https://www.npmjs.com/package/express)
* [serverless-http](https://www.npmjs.com/package/serverless-http)
* [mocha](https://www.npmjs.com/package/mocha)


## Versionado 📌

Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/jesuslg2019/prueba_tecnica/tree/master).

## Autores ✒️


* **JESÚS LAZO GÓMEZ** - *Developer* - [LAZO](https://github.com/jesuslg2019)
