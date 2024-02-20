import { ChuyenMuc } from 'src/Entity/chuyen_muc.entity'
import { DataSource } from 'typeorm'

export const chuyenMucProviders = [
    {
        provide: 'CHUYENMUC_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ChuyenMuc),
        inject: ['DATA_SOURCE'],
    },
]
