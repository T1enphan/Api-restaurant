import { Module } from "@nestjs/common";
import { ChuyenMucController } from "src/Controllers/chuyen_muc.controller";
import { DatabaseModule } from "src/Database/database.module";
import { chuyenMucProviders } from "src/Providers/chuyen_muc.provider";
import { ChuyenMucService } from "src/services/chuyen_muc.service";

@Module({
    imports: [DatabaseModule],
    controllers: [ChuyenMucController],
    providers: [...chuyenMucProviders, ChuyenMucService]
})
export class ChuyenMucModule { }