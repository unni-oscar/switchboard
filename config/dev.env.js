'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"developmentddd"',
  API_URL:'"http://localhost:8081/api"'
})
