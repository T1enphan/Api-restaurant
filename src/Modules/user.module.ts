import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "src/Controllers/user.controller";
import { DatabaseModule } from "src/Database/database.module";
import { Posts } from "src/Entity/Posts.entity";
import { Profiles } from "src/Entity/Profile.entity";
import { User } from "src/Entity/user.entity";
import { userProvider } from "src/Providers/user.provider";
import { UserService } from "src/services/user.service";

@Module({
    imports: [DatabaseModule, TypeOrmModule.forFeature([User, Profiles, Posts])],
    controllers: [UserController],
    providers: [...userProvider, UserService]
})
export class UserModule { }