import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/interfaces/transaction.interface';


@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  today = new Date();
  transactions!: Transaction[];
  constructor(private chartsData: DashboardChartsData, private transactionService: TransactionService) {
  }

  
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit(): void {
    this.initCharts();
    this.getLastTransactions();
  }

  getLastTransactions(){
    this.transactionService.getLastTransactions(1, 10).subscribe({
      next: (resp) => {
        this.transactions = resp;
      }
    })
  }

  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
}
