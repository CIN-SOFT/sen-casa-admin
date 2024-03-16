import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transaction } from '../interfaces/transaction.interface';
import { TransactionTypeEnum } from '../enums/transaction-type.enum';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
 
  constructor(private http: HttpClient) { }

  getLastTransactions(page: number, items: number): Observable<any>{
    return this.http.get(`${environment.apiUrl}admin/transactions`).pipe(response => response);
  }
}
