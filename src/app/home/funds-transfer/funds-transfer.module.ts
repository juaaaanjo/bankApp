import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FundsTransferPageRoutingModule } from './funds-transfer-routing.module';

import { FundsTransferPage } from './funds-transfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FundsTransferPageRoutingModule
  ],
  declarations: [FundsTransferPage]
})
export class FundsTransferPageModule {}
