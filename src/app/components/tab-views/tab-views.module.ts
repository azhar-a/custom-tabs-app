import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabViewsComponent } from './tab-views.component';
import { TabsModule } from '../tabs/tabs.module';

@NgModule({
  declarations: [TabViewsComponent],
  imports: [
    CommonModule,
    TabsModule,
    IonicModule
  ],
  exports: [TabViewsComponent]
})
export class TabViewsModule { }
