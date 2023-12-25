import { TransactionTypeEnum } from "../enums/transaction-type.enum";
import { User } from "./user.interface";

export interface Transaction{
    id: number;
    createdAt: string;
    updatedAt: string;
    receiver: User;
    amount: number;
    status: string;
    operator?: string;
    transactionType: TransactionTypeEnum;
    sender?: User;
}