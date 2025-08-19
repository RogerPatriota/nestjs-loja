import { All, Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { UserCreateDTO } from "./DTO/user.create.dto";
import { UserEntity } from "./user.entity";
import { v4 as uuid } from 'uuid'
import { UserReadDTO } from "./DTO/user.read.dto";
import { UserUpdateDTO } from "./DTO/user.update.dto";

@Controller('user')
export class UserController {

    constructor(private userRepository: UserRepository) {
    }

    @Get()
    async getUsers() {
        const Allusers = await this.userRepository.showUser()

        const users = Allusers.map(
            user => new UserReadDTO(
                user.id,
                user.name
            )
        )
        console.log(Allusers)
        
        return { data: users }
    }
    
    @Post()
    async createUser(@Body() userData: UserCreateDTO) {
        const userEntity = new UserEntity()
        userEntity.name = userData.name
        userEntity.email = userData.email
        userEntity.password = userData.password
        userEntity.id = uuid()

        const newUser = await this.userRepository.saveUser(userEntity)

        if (newUser) {
            return { message: 'user create', data: new UserReadDTO(
                userEntity.id,
                userEntity.name
            )}
        }
        return { message: 'user not create'}
        
    }

    @Put('/:id')
    async updateUser(@Body() userData: UserUpdateDTO, @Param() params: any) {
        const newUser = await this.userRepository.updateUser(params.id, userData)
        
        if (newUser) {
            return { message: 'user updated', data: newUser}
        }
        return { message: 'user not updated'}
    }

    @Delete('/:id')
    async deleteUser(@Param() params: any) {
        const user = await this.userRepository.deleteUser(params.id)

        if (!user) {
            throw new Error('User not deleted')
        }

        return { message: 'user deleted', data: user }
    }



}