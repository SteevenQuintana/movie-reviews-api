import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import db from './config/mongo'
import { router } from './routes'
import pkg from '../package.json'
import { createRoles } from './libs/initialSetup'
import swaggerUi from 'swagger-ui-express'
import swaggerSetup from './docs/swagger'

const PORT = process.env.PORT || 3001
const app = express()
createRoles()

app.use(cors())
app.use(express.json())
app.use(router)
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSetup))

db().then(() => console.log('conexion ready!'))

app.set('pkg', pkg)
app.get('/', (req, res) => {
  res.json({
    author: app.get('pkg').author,
    projectName: app.get('pkg').name,
    description: app.get('pkg').description,
    version: app.get('pkg').version
  })
})

app.listen(PORT, () => console.log(`Listo en el port: ${PORT}`))
