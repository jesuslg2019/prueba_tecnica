const serverless = require('serverless-http')
const express = require('express')
const axios = require('axios')
const app = express()
const AWS = require('aws-sdk')
AWS.config.update({ region: 'us-east-1' })
const dynamoDb = new AWS.DynamoDB.DocumentClient()

app.get('/', async (req, res) => {
  let result = await get_planet()
  //defino la tabla
  const params = { TableName: 'planetas' }
  // obtengo los items dynamodb
  await dynamoDb.scan(params, function (err, data) {
    if (err) console.log(err);
    else result = { ...result, my_data: data };
  }).promise()

  res.send({
    status: 200,
    message: "ok",
    data: result
  })
})

const get_planet = async () => {
  const awapi_url = "http://swapi.py4e.com/api/planets/1/"
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

