import express from 'express'
import { config } from './config'
import { json } from 'body-parser'
import { setLocale } from 'yup'
import { pt } from 'yup-locale-pt'
import { routers } from './routes'
import { sequelize } from './services/sequelize'
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "../swagger.json"
const cors = require('cors')

export const startServer = async () => {
    await sequelize
    .authenticate()
    .then(() => console.log('[Database] Autenticado com sucesso.'))
    .catch(console.log)
    
    await sequelize
    .sync({alter: {drop: false}, force: false, logging: false})
    .then(() => console.log('[Database] Sincronizado com sucesso.'))
    .catch(console.log)
    
    // defaults.init()
    
    setLocale(pt)

    const app = express()

    app.use(cors({allowedHeaders: '*', exposedHeaders: '*'}))
    
    app.use(json())
    app.use(express.urlencoded({extended: true}))
    
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    app.use('/api', routers)

    app.listen(config.port, () => console.log(`[Express] Running at port ${config.port}`))
}
startServer()
