import { IsEmpty, IsNumber, IsString, isEmpty } from "class-validator";

export class CreateUserDTO {
    email: string;
    @IsString()
    password: string;
}
export class UpdateUserDTO {
    @IsString()
    password: string;
}