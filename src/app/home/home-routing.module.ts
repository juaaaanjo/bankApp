import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'create-bank-account',
    loadChildren: () => import('./create-bank-account/create-bank-account.module').then( m => m.CreateBankAccountPageModule)
  },
  {
    path: 'funds-transfer',
    loadChildren: () => import('./funds-transfer/funds-transfer.module').then( m => m.FundsTransferPageModule)
  },
  {
    path: 'transaction-approval',
    loadChildren: () => import('./transaction-approval/transaction-approval.module').then( m => m.TransactionApprovalPageModule)
  },
  {
    path: 'manage-accounts',
    loadChildren: () => import('./manage-accounts/manage-accounts.module').then( m => m.ManageAccountsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
