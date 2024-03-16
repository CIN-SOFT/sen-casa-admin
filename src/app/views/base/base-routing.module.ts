import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgramsComponent } from './programs/programs.component';
import { NewProgramComponent } from './new-program/new-program.component';
import { AccountsComponent } from './accounts/accounts.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { PropertiesComponent } from './properties/properties.component';
import { NewPropertyComponent } from './new-property/new-property.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'programs',
      },

      {
        path: 'programs',
        component: ProgramsComponent,
        data: {
          title: 'Programmes',
        },
      },
      {
        path: 'program/add',
        component: NewProgramComponent,
        data: {
          title: 'Aouter un nouveau programme',
        },
      },
      {
        path: 'properties',
        component: PropertiesComponent,
        data: {
          title: 'Programmes',
        },
      },
      {
        path: 'property/add',
        component: NewPropertyComponent,
        data: {
          title: 'Ajouter une nouvelle Proprieté'
        }
      },
      {
        path: 'property/details/:id',
        component: PropertyDetailsComponent,
        data: {
          title: 'Details de la Proprieté'
        }
      },
      {
        path: 'accounts',
        component: AccountsComponent,
        data: {
          title: 'Comptes'
        }
      },
      {
        path: 'accounts/details/:id',
        component: AccountDetailsComponent,
        data: {
          title: 'Détails'
        }
      },
      {
        path: 'subscriptions',
        component: SubscriptionsComponent,
        data: {
          title: 'Souscriptions'
        }
      },
      {
        path: 'program/add',
        component: NewProgramComponent,
        data: {
          title: 'Nouveau Programme',
        },
      },
      {
        path: 'transactions',
        component: TransactionsComponent,
        data: {
          title: 'Transactions'
        }
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseRoutingModule {}

