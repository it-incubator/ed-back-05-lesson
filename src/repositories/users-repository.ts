import {usersAccountsCollection} from './db'
import {UserAccountDBType} from './types'
import {ObjectId} from 'mongodb'

export const usersRepository = {
    async getAllUsers(): Promise<UserAccountDBType[]> {
        return usersAccountsCollection
            .find()
            .sort('createdAt', -1)
            .toArray()
    },
    async createUser(user: UserAccountDBType): Promise<UserAccountDBType> {
        const result = await usersAccountsCollection.insertOne(user)
        return user
    },
    async findUserById(id: ObjectId): Promise<UserAccountDBType | null> {
        let product = await usersAccountsCollection.findOne({_id: id})
        if (product) {
            return product
        } else {
            return null
        }
    },
    async findByLoginOrEmail(loginOrEmail: string) {
        const user = await usersAccountsCollection.findOne({ $or: [ { email: loginOrEmail }, { userName: loginOrEmail } ] } )
        return user
    }
}

export const repositoryDB = {}
