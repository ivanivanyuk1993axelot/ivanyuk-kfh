import {NgModule} from '@angular/core';

import {HomeRoutingModule} from './home-routing.module';
import {IndexComponent} from './index/index.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatTableModule} from '@angular/material';
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
    MatCardModule,
    MatTableModule,
  ],
})
export class HomeModule {
}
