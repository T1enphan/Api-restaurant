import { Body, HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Posts } from "src/Entity/Posts.entity";
import { Profiles } from "src/Entity/Profile.entity";
import { User } from "src/Entity/user.entity";
import { CreateUserPostParams, createUserParams, createUserProfileParams, updateUserParams } from "src/Utils/types";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRespository: Repository<User>,
        @InjectRepository(Profiles) private profileRepository: Repository<Profiles>,
        @InjectRepository(Posts) private postRepository: Repository<Posts>
    ) { }
    createUser(userDetails: createUserParams) {
        const newUser = this.userRespository.create({ ...userDetails, createAt: new Date(), })
        return this.userRespository.save(newUser)
    }
    getData() {
        return this.userRespository.find({ relations: ['profile', 'posts'] })
    }
    async updateUserByID(id: number, updateUserDetails: updateUserParams) {
        return await this.userRespository.update({ id }, { ...updateUserDetails })
    }
    deleteUser(id: number) {
        return this.userRespository.delete({ id })
    }
    async createProfileUser(id: number, createUserProfileDetails: createUserProfileParams) {
        const user = await this.userRespository.findOneBy({ id });
        if (!user) throw new HttpException('User not found. Cannot create profile!', HttpStatus.BAD_REQUEST);
        const newProfile = this.profileRepository.create(createUserProfileDetails);
        const savedProfile = await this.profileRepository.save(newProfile);
        user.profile = savedProfile;
        return this.userRespository.save(user)
    }

    async createUserPost(id: number, createUserPostDetail: CreateUserPostParams) {
        const user = await this.userRespository.findOneBy({ id });
        if (!user) throw new HttpException('User not found. Cannot create profile!', HttpStatus.BAD_REQUEST);
        const newPost = this.postRepository.create({ ...createUserPostDetail, user, });
        const savedPost = await this.postRepository.save(newPost);
        return this.postRepository.save(savedPost);
    }
}