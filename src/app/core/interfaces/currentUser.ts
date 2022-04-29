export interface ICurrentUser{
    email: string,
    username: string,
    roles: string[],
    jwtAuthToken: string
}