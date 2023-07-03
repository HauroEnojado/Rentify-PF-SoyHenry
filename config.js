require('dotenv').config()

const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  HOST,
  MODE,
  JWT_SECRET,
  URL_PRUEBAS,
  URL_DEPLOY,
  URL_CLIENTE,
  MP_ACCESS_TOKEN_AR,
  MP_ACCESS_TOKEN_CO,
  MP_ACCESS_TOKEN_PE,
  MP_ACCESS_TOKEN_CL,
  MP_ACCESS_TOKEN_MX,
  MP_ACCESS_TOKEN_BR,
  MP_ACCESS_TOKEN_UY,
  URL_CLIENTE_PRUEBAS,
  URL_ADMIN_1,
  URL_ADMIN_2,
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  REFRESH_TOKEN,
  EMAIL_RENTIFY
} = process.env

const PORT = 3001
const url = MODE === 'PRODUCTION' ? URL_DEPLOY : URL_PRUEBAS
const urlApi = url + '/api-rentify'
const urlDoc = url + '/api-doc'

module.exports = {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  HOST,
  MODE,
  JWT_SECRET,
  PORT,
  URL_PRUEBAS,
  URL_DEPLOY,
  URL_CLIENTE,
  MP_ACCESS_TOKEN_AR,
  MP_ACCESS_TOKEN_CO,
  MP_ACCESS_TOKEN_PE,
  MP_ACCESS_TOKEN_CL,
  MP_ACCESS_TOKEN_MX,
  MP_ACCESS_TOKEN_BR,
  MP_ACCESS_TOKEN_UY,
  URL_CLIENTE_PRUEBAS,
  URL_ADMIN_1,
  URL_ADMIN_2,
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  REFRESH_TOKEN,
  EMAIL_RENTIFY,
  url,
  urlApi,
  urlDoc
}
