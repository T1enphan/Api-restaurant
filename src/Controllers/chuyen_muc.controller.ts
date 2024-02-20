import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CreateChuyenMucDTO, UpdateChuyenMucDTO } from "src/Dtos/chuyen_muc.dto";
import { ChuyenMucService } from "src/services/chuyen_muc.service";

@Controller('chuyen-muc')
export class ChuyenMucController {
    constructor(private chuyenMucService: ChuyenMucService) { }
    @Get('/get-data')
    getData() {
        return this.chuyenMucService.getDataChuyenMuc()
    }

    @Post('/create')
    createChuyenMuc(@Body() createChuyenMucDto: CreateChuyenMucDTO) {
        return this.chuyenMucService.createChuyenMuc(createChuyenMucDto)
    }
    @Put('/update-chuyen-muc/:id')
    async updateChuyenMucById(@Param('id', ParseIntPipe) id: number, @Body() updateChuyenMucDTO: UpdateChuyenMucDTO) {
        await this.chuyenMucService.updateChuyenMuc(id, updateChuyenMucDTO)
    }

    @Delete('/delete-chuyen-muc/:id')
    async deleteChuyenMucById(@Param('id', ParseIntPipe) id: number) {
        await this.chuyenMucService.deleteChuyenMuc(id)
    }
}