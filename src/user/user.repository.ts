import { Injectable } from "@nestjs/common"
import { UserEntity } from "./user.entity"


@Injectable()
export class UserRepository {
    private users: UserEntity[] = []

    private searchById(id: string) {
        const user = this.users.find(
            user => user.id == id
        )

        return user
    }

    async showUser() {
        return this.users
    }

    async saveUser(user: UserEntity) {
        this.users.push(user)
        return true
    }

    async getUserByEmail(email: string) {
        const user = this.users.find(
            user => user.email == email
        )

        return user !== undefined
    }

    async updateUser(id: string, userData: Partial<UserEntity>) {
        const user = this.searchById(id)

        if (!user) {
            throw new Error ('User not found')
        }
        console.log(userData)
        Object.entries(userData).forEach(([key, value]) => {
            if (key === 'id' || value === undefined) {
                return
            }
            user[key] = value
        })

        return user

    }

    async deleteUser(id: string) {
        const user = this.searchById(id)
        this.users = this.users.filter(
            user => user.id !== id
        )

        return user
    }
}