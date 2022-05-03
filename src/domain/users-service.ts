import {usersRepository} from '../repositories/users-repository'
import {UserAccountDBType} from '../repositories/types'
import {ObjectId} from 'mongodb'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {settings} from '../settings'


export const usersService = {
    async getAllUsers(): Promise<UserAccountDBType[]> {
        return usersRepository.getAllUsers()
    },
    async findUserById(id: ObjectId): Promise<UserAccountDBType | null> {
        return usersRepository.findUserById(id)
    }
}
