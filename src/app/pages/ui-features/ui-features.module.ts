import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ButtonsModule } from './buttons/buttons.module';
import { UiFeaturesRoutingModule } from './ui-features-routing.module';
import { UiFeaturesComponent } from './ui-features.component';
import { GridComponent } from './grid/grid.component';
import { ModalsComponent } from './modals/modals.component';
import { IconsComponent } from './icons/icons.component';
import { ModalComponent } from './modals/modal/modal.component';
import { TypographyComponent } from './typography/typography.component';
import { TabsComponent, Tab1Component, Tab2Component } from './tabs/tabs.component';
import { SearchComponent } from './search-fields/search-fields.component';

const components = [
  UiFeaturesComponent,
  GridComponent,
  ModalsComponent,
  IconsComponent,
  ModalComponent,
  TypographyComponent,
  TabsComponent,
  Tab1Component,
  Tab2Component,
  SearchComponent,
];

@NgModule({
  imports: [
    SharedModule,
    UiFeaturesRoutingModule,
    ButtonsModule,
  ],
  declarations: [
    ...components,
  ],
  entryComponents: [
    ModalComponent,
  ],
})
export class UiFeaturesModule { }
