import { IsEmpty, IsNotEmpty, IsString } from "class-validator";

export class CreateChuyenMucDTO {
    @IsString()
    ten_chuyen_muc: string;
    @IsString()
    slug_chuyen_muc: string;
    @IsNotEmpty()
    tinh_trang: number;
    @IsEmpty()
    id_chuyen_muc_cha: number;
    @IsEmpty()
    created_at: Date
}
export class UpdateChuyenMucDTO {
    @IsString()
    ten_chuyen_muc: string;
    @IsString()
    slug_chuyen_muc: string;
    @IsNotEmpty()
    tinh_trang: number;
    @IsEmpty()
    id_chuyen_muc_cha: number;
    @IsEmpty()
    created_at: Date
}