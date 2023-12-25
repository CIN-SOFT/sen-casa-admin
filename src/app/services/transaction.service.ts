import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transaction } from '../interfaces/transaction.interface';
import { TransactionTypeEnum } from '../enums/transaction-type.enum';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  lastTransactions: Transaction[] = [
    {
      id: 1,
      createdAt: '20/12/2023 10:20',
      updatedAt: '20/12/2023 10:21',
      receiver: {
        id: 1,
        firstName: 'Aliou',
        lastName: 'Thiema',
        email:'aliouthiema@gmail.com',
        phone: '780149756'
      },
      amount: 23000,
      status: 'done',
      operator: 'Orange Money',
      transactionType: TransactionTypeEnum.EPARGNE
      //sender?: User;
    }
  ]
  constructor(private http: HttpClient) { }

  getLastTransactions(page: number, items: number): Observable<any>{
    return of(this.lastTransactions);
  }
}
