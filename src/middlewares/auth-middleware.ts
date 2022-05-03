import {NextFunction, Request, Response} from 'express'
import {usersService} from '../domain/users-service'
import {jwtService} from '../application/jwt-service'

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        res.send(401)
        return
    }

    const token = req.headers.authorization.split(' ')[1]

    const userId = await jwtService.getUserIdByToken(token)
    if (userId) {
        req.user = await usersService.findUserById(userId)
        next()
    }
    res.send(401)
}
