import { IBase } from "./base";
import { IRole } from "./role";

export interface IUser extends IBase{
    fullName?: string,
    email: string,
    username: string,
    roles: IRole[],
    jwtAuthToken?: string 
}