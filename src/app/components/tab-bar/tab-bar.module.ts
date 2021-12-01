import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabBarComponent } from './tab-bar.component';

@NgModule({
  declarations: [TabBarComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [TabBarComponent]
})
export class TabBarModule { }
