export type CreateChuyenMucParams = {
    ten_chuyen_muc: string
    slug_chuyen_muc: string
    tinh_trang: number
    id_chuyen_muc_cha: number
    created_at: Date
}
export type UpdateChuyenMucParams = {
    ten_chuyen_muc: string
    slug_chuyen_muc: string
    tinh_trang: number
    id_chuyen_muc_cha: number
    created_at: Date
}
export type createUserParams = {
    email: string
    password: string
}
export type updateUserParams = {
    password: string;
}
export type createUserProfileParams = {
    first_name: string;
    last_name: string;
    age: number;
    date_of_birth: string;
}