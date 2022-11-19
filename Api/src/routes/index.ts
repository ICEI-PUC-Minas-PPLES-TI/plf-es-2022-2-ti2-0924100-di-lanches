import { Router } from "express"
import { lancheRouter } from "./route/lancheRouter"

export const routers = Router()
routers.use("/lanche", lancheRouter)