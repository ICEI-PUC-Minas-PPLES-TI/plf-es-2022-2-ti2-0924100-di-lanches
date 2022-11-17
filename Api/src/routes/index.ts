import { Router } from "express"
import { testeRouter } from "./route/testeRouter"

export const routers = Router()
routers.use("/teste", testeRouter)