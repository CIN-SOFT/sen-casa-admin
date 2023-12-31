import { TransactionTypeEnum } from "../enums/transaction-type.enum";
import { UserAccount } from "./user-account.interface";

export interface Transaction{
    id: number;
    createdAt: string;
    updatedAt: string;
    receiver: UserAccount;
    amount: number;
    status: string;
    operator?: string;
    transactionType: TransactionTypeEnum;
    sender?: UserAccount;
}