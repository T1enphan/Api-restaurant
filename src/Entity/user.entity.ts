import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profiles } from "./Profile.entity";
import { Posts } from "./Posts.entity";


export enum ROLES {
    ADMIN = "ADMIN",
    MOD = "MOD",
    USER = "USER",
}

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;
    @Column({ unique: true })
    email: string;
    @Column()
    password: string;
    @Column({ default: ROLES.USER })
    roles: ROLES
    @Column()
    createAt: Date
    @Column({ nullable: true })
    authStrategy: string
    @OneToOne(() => Profiles)
    @JoinColumn()
    profile: Profiles;
    //profile đây là khóa phụ để liên kết với các bảng

    @OneToMany(() => Posts, (posts) => posts.user)
    posts: Posts[];
}