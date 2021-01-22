const serverless = require('serverless-http')
const express = require('express')
const axios = require('axios')
const app = express()
const AWS = require('aws-sdk')
AWS.config.update({ region: 'us-east-1' })
const dynamoDb = new AWS.DynamoDB.DocumentClient()
const { hash } = require('../tools/')


app.post('/', async (req, res) => {
    const table = "planetas"
    const { planet } = req.query
    //Obtengo el planeta para setear a la bd
    const planets = await get_planet(planet)

    //Armo el json para setear
    var params = {
        TableName: table,
        Item: {
            ID: hash(),
            ...planets
        }
    }
    //Set data en dynamodb
    await dynamoDb.put(params, error => {
        console.log('putting data')
        if (error) {
            console.log(`Error saving data to DynamoDB: ${JSON.stringify(error)}`);
            return Promise.reject(
                `Error saving data to DynamoDB: ${JSON.stringify(error)}`
            )
        } else {
            console.log('data saved')
            return Promise.resolve(params.Item)
        }
    }).promise()

    res.send({
        status: 200,
        message: "ok",
        data: {
            ...planets
        }
    })
})

/**
 * Se concatena el servicio y obtengo los datos del planeta
 * @param {Number} number 
 */
const get_planet = async (number = 1) => {
    const awapi_url = "http://swapi.py4e.com/api/planets/" + number
    try {
        const response = await axios.get(awapi_url)
        const {
            name: nombre,
            rotation_period: periodo_rotacion,
            orbital_period: periodo_orbital,
            diameter: diametro,
            climate: clima,
            gravity: gravedad,
            terrain: terreno,
            surface_water: superficie_agua,
            population: poblacion,
            residents: residentes,
            films: pelicula,
            created: creado,
            edited: editado,
            url
        } = response.data
        return {
            nombre,
            periodo_rotacion,
            periodo_orbital,
            diametro,
            clima,
            gravedad,
            terreno,
            superficie_agua,
            poblacion,
            residentes,
            pelicula,
            creado,
            editado,
            url
        }
    } catch (error) {
        console.error(error)
    }
}

module.exports.handler = serverless(app)