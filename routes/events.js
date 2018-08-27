const express = require( 'express' )
const router = express.Router()

const eventsObject = [
  { 
    id: 00002,
    name: 'Lucas Lucco Show Oficial', 
    location: 'SP Canindé', 
    band: 'Lucas Lucco Oficial',
    artists: [
      'Lucas Lucco'
    ],
    date: '20180610'
  },
  { 
    id: 00001,
    name: 'Reggalize', 
    location: 'Pq. da juventude SP Zona Norte', 
    band: 'Reggaeton',
    artists: [
      'Matheus Rodrigo'
    ],
    date: '20181005'
  }
]

const events = ( req, res, next ) => res.send( eventsObject )
const event = ( req, res, next ) => res.send( 'event per user' )

const middleware = ( req, res, next ) => {
  console.log( '------------------------------------' )
  console.log( 'middleware' )
  console.log( '------------------------------------' )
  next()
}

const routes = [
  { method: 'get',
    path: '/',
    action: events,
    middleware
  },
  { method: 'get',
    path: '/:id',
    action: event
  }
]

const createRoute = ( route ) => 
  ( route.middleware )
    ? router[ route.method ]( route.path, route.middleware, route.action )
    : router[ route.method ]( route.path, route.action )

const createRoutes = ( routes ) => routes.map( createRoute )

createRoutes( routes )

module.exports = router