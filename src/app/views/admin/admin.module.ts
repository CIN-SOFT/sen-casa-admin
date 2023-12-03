import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// CoreUI Modules
import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  ModalModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TableModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';

import { IconSetService } from '@coreui/icons-angular';
import { brandSet, flagSet, freeSet } from '@coreui/icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { AdminRoutingModule } from './admin-routing.module';

import { PaymentMethodComponent } from './payment-method/programs.component';
import { RolesComponent } from './roles/roles.component';
import { ZonesComponent } from './zones/zones.component';

import { CustomSharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    ButtonGroupModule,
    CardModule,
    CollapseModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    ListGroupModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,
    ModalModule,

    FontAwesomeModule,
    EditorModule,

    CustomSharedModule
  ],
  exports: [
    FontAwesomeModule
  ],
  declarations: [
    PaymentMethodComponent,
    RolesComponent,
    ZonesComponent
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ]
})
export class AdminModule {
  constructor(private iconSet: IconSetService){
    iconSet.icons = { ...freeSet, ...brandSet, ...flagSet};
  }
}
