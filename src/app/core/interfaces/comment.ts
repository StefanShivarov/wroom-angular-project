import { IBase } from "./base";
import { IUser } from "./user";

export interface IComment extends IBase{

    textContent: string,
    author: IUser,
    offerId: number
}