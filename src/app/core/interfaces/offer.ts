import { IBase } from "./base";
import { IUser } from "./user";

export interface IOffer extends IBase{
    title: string, 
    description?: string,
    imageUrl: string,
    price: number,
    owner: IUser
}