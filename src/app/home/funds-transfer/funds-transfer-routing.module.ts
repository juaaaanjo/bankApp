import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FundsTransferPage } from './funds-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: FundsTransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundsTransferPageRoutingModule {}
