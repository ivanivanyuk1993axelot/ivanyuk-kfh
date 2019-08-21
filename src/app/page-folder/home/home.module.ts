import {NgModule} from '@angular/core';

import {HomeRoutingModule} from './home-routing.module';
import {IndexComponent} from './index/index.component';
import {MatButtonModule, MatIconModule, MatListModule} from '@angular/material';
import {LocalizationModule} from '../../util/feature-folder/localization/localization.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    HomeRoutingModule,
    MatButtonModule,
    LocalizationModule,
    CommonModule,
    MatIconModule,
    MatListModule,
  ],
})
export class HomeModule {
}
