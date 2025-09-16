import { Injectable } from "@nestjs/common";

import { UserEntity } from "./user.entity";
import { UserReadDTO } from "./DTO/user.read.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "./user.repository";
import { Repository } from "typeorm";

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
}