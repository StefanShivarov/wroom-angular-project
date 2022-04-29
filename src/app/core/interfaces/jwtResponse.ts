export interface JwtResponse{
    token: string,
    type: string,
    username: string,
    email: string,
    roles: string[]
}