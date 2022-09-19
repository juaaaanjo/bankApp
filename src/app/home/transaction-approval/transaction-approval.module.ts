import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionApprovalPageRoutingModule } from './transaction-approval-routing.module';

import { TransactionApprovalPage } from './transaction-approval.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionApprovalPageRoutingModule
  ],
  declarations: [TransactionApprovalPage]
})
export class TransactionApprovalPageModule {}
