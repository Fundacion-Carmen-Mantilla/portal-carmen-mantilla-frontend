export interface LoginCredentials {
    email: string;
    password: string;
}

export interface AuthResponse {
    success: boolean;
    message: string;
    data: AccessToken;
}

export interface AccessToken {
    access_token: string;
    token_type: string;
    expires_in: number;
}
