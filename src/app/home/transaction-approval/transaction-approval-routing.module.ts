import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionApprovalPage } from './transaction-approval.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionApprovalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionApprovalPageRoutingModule {}
