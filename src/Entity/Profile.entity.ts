import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'profiles' })
export class Profiles {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number
    @Column()
    id_user: number
    @Column()
    first_name: string;
    @Column()
    last_name: string;
    @Column()
    age: number;
    @Column()
    date_of_birth: string;
}