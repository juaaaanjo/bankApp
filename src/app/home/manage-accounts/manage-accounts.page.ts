import { Component, OnInit } from '@angular/core';
import { MethodsService } from 'src/providers/methods.service';

@Component({
  selector: 'app-manage-accounts',
  templateUrl: './manage-accounts.page.html',
  styleUrls: ['./manage-accounts.page.scss'],
})
export class ManageAccountsPage implements OnInit {

  public accounts;

  constructor(private methodsService: MethodsService) { }

  async ngOnInit() {
    await this.getThirdPartyAccounts();
  }

  private async getThirdPartyAccounts(): Promise<void>{
    this.accounts = await this.methodsService.get('/thirdparty');
    console.log(this.accounts);
  }

}
