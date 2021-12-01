import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { TabBarModule } from '../../components/tab-bar/tab-bar.module';
import { TabViewsModule } from '../../components/tab-views/tab-views.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    TabBarModule,
    TabViewsModule
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
