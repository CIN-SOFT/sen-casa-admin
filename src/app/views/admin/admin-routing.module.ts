import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentMethodComponent } from './payment-method/programs.component';
import { RolesComponent } from './roles/roles.component';
import { ZonesComponent } from './zones/zones.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: '',
    },
    children: [
      {
        path: 'payment-method',
        component: PaymentMethodComponent
      },
      {
        path: 'roles',
        component: RolesComponent
      },
      {
        path: 'zones',
        component: ZonesComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
