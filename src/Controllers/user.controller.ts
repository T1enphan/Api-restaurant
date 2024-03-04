import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateUserPostDTO } from "src/Dtos/posts.dto";
import { CreateUserProfileDTO } from "src/Dtos/profile.dto";
import { CreateUserDTO } from "src/Dtos/user.dto";
import { UserService } from "src/services/user.service";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get('/get-data')
    getDataUser() {
        return this.userService.getData()
    }

    @Post('/create-user')
    createUser(@Body() createUserDTO: CreateUserDTO) {
        return this.userService.createUser(createUserDTO)
    }

    @Put('/update-user/:id')
    async updateUserByID(@Param('id', ParseIntPipe) id: number, @Body() UpdateUserDTO) {
        await this.userService.updateUserByID(id, UpdateUserDTO)
    }

    @Delete('/delete-user/:id')
    async deleteUser(@Param('id', ParseIntPipe) id: number) {
    }

    @Post(':id/create-profile')
    createProfile(@Param('id', ParseIntPipe) id: number,
        @Body() createUserProfileDTO: CreateUserProfileDTO) {
        return this.userService.createProfileUser(id, createUserProfileDTO)
    }

    @Post(':id/posts')
    createUserPost(@Param('id', ParseIntPipe) id: number, @Body() createUserPostDTO: CreateUserPostDTO) {
        return this.userService.createUserPost(id, createUserPostDTO);
    }

} 