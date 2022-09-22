import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageAccountsPageRoutingModule } from './manage-accounts-routing.module';

import { ManageAccountsPage } from './manage-accounts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageAccountsPageRoutingModule
  ],
  declarations: [ManageAccountsPage]
})
export class ManageAccountsPageModule {}
