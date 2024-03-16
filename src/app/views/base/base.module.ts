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

// utils
import { DocsComponentsModule } from '@docs-components/docs-components.module';

// views
import { ProgramsComponent } from './programs/programs.component';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { NewProgramComponent } from './new-program/new-program.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { PropertiesComponent } from './properties/properties.component';
import { NewPropertyComponent } from './new-property/new-property.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { TransactionsComponent } from './transactions/transactions.component'
import { IconSetService } from '@coreui/icons-angular';
import { brandSet, flagSet, freeSet } from '@coreui/icons';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { CustomSharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BaseRoutingModule,
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
    DocsComponentsModule,
    ModalModule,

    FontAwesomeModule,
    EditorModule,

    CustomSharedModule
  ],
  exports: [
    FontAwesomeModule
  ],
  declarations: [
    ProgramsComponent,
    NewProgramComponent,
    AccountsComponent,
    AccountDetailsComponent,
    SubscriptionsComponent,
    PropertiesComponent,
    NewPropertyComponent,
    PropertyDetailsComponent,
    TransactionsComponent
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ]
})
export class BaseModule {
  constructor(private iconSet: IconSetService){
    iconSet.icons = { ...freeSet, ...brandSet, ...flagSet};
  }
}
