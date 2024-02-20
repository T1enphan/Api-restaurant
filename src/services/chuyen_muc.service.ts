import { Body, Inject, Injectable } from "@nestjs/common";
import { ChuyenMuc } from "src/Entity/chuyen_muc.entity";
import { CreateChuyenMucParams, UpdateChuyenMucParams } from "src/Utils/types";
import { Repository } from "typeorm";

@Injectable()
export class ChuyenMucService {
    constructor(
        // @InjectRepository(ChuyenMuc) private chuyenmucRespository: Repository<ChuyenMuc>
        @Inject('CHUYENMUC_REPOSITORY')
        private chuyenmucRespository: Repository<ChuyenMuc>
    ) { }

    getDataChuyenMuc() {
        return this.chuyenmucRespository.find();
    }
    createChuyenMuc(ChuyenMucDetails: CreateChuyenMucParams) {
        const newChuyenMuc = this.chuyenmucRespository.create({ ...ChuyenMucDetails, created_at: new Date() });
        return this.chuyenmucRespository.save(newChuyenMuc)
    }
    async updateChuyenMuc(id: number, updateChuyenMucDetails: UpdateChuyenMucParams) {
        return await this.chuyenmucRespository.update({ id }, { ...updateChuyenMucDetails })
    }
    deleteChuyenMuc(id: number) {
        return this.chuyenmucRespository.delete({ id })
    }
}