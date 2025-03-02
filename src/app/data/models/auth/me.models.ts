export interface MeResponse {
    success: boolean;
    message: string;
    data: UserModel;
}

export interface UserModel {
    id: string;
    name: string;
    last_name: string;
    email: string;
    avatar: string;
    role_id: number;
    created_at: string;
    updated_at: string;
}
