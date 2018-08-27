const express = require( 'express' )
const router = express.Router()

const usersObject = [
  { id: 00001, name: 'Joao Carlos Peres', musicalStyle: 'Rock', artisticName: 'JC', band: 'Rock Style' },
  { id: 00002, name: 'Lucas Lucco', musicalStyle: 'Sertanejo universitário', artisticName: 'Lucas Lucco', band: 'Lucas Lucco Oficial' },
  { id: 00003, name: 'Matheus Rodrigo', musicalStyle: 'Reggae', artisticName: '', band: 'Reggaeton' },
  { id: 00004, name: 'Kaiam Alexandre', musicalStyle: 'Pagode', artisticName: 'Kaiam', band: 'Pagode nova geração' },
  { id: 00005, name: 'Felipe Conti', musicalStyle: 'Opera', artisticName: 'Conti', band: '' }
]

const users = ( req, res, next ) => res.send( usersObject )
const user = ( req, res, next ) => res.send( 'user api with param id' )

const middleware = ( req, res, next ) => {
  console.log( '------------------------------------' )
  console.log( 'middleware' )
  console.log( '------------------------------------' )
  next()
}

const routes = [
  { method: 'get',
    path: '/',
    action: users,
    middleware
  },
  { method: 'get',
    path: '/:id',
    action: user
  }
]

const createRoute = ( route ) => 
  ( route.middleware )
    ? router[ route.method ]( route.path, route.middleware, route.action )
    : router[ route.method ]( route.path, route.action )

const createRoutes = ( routes ) => routes.map( createRoute )

createRoutes( routes )

module.exports = router