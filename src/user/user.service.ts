import { Injectable } from "@nestjs/common";

import { UserEntity } from "./user.entity";
import { UserReadDTO } from "./DTO/user.read.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "./user.repository";
import { Repository } from "typeorm";
import { UserCreateDTO } from "./DTO/user.create.dto";
import { UserUpdateDTO } from "./DTO/user.update.dto";

@Injectable()
export class UserService{

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async showUsers() {
        const DBusers = await this.userRepository.find();

        return DBusers
    }

    async createUser(userData: UserEntity) {
        const DBuser = await this.userRepository.save(userData)

        return DBuser
    }

    async updateUser(id: string, userData: UserUpdateDTO) {
        
        const DBuser = await this.userRepository.findOneBy({ id: id})

        if (DBuser) {
            const newUser = await this.userRepository.update(id, userData)

            return DBuser
        }

        return false
    }

    async deleteUser(id: string) {
        const DBuser = await this.userRepository.delete(id)

        return DBuser
    }
}