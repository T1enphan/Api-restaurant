import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'chuyen_mucs' })
export class ChuyenMuc {
    @PrimaryGeneratedColumn('increment')
    id: number
    @Column({ unique: true })
    ten_chuyen_muc: string
    @Column()
    slug_chuyen_muc: string
    @Column()
    tinh_trang: number
    @Column({ default: 0 })
    id_chuyen_muc_cha: number
    @Column({ type: 'timestamp' })
    created_at: Date
}
