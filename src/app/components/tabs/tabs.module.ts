import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import {Tab1Component} from './tab1/tab1.component';
import {Tab2Component} from './tab2/tab2.component';
import {Tab3Component} from './tab3/tab3.component';

@NgModule({
  declarations: [Tab1Component, Tab2Component, Tab3Component],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [Tab1Component, Tab2Component, Tab3Component]
})
export class TabsModule { }
