import { Component, OnInit } from '@angular/core';
import { MethodsService } from 'src/providers/methods.service';

@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.page.html',
  styleUrls: ['./create-bank-account.page.scss'],
})
export class CreateBankAccountPage implements OnInit {
  public accountEnum = {
    account: null,
    alias:  null,
    currency:  null,
    accountType:  null,
    finantialInstitution:  null,
    accountHolderID:  null,
  };
  public accountType;
  public alias;
  public bankList;
  public account;
  public accountHolderId;
  public financialInstitution;
  public currency;

  constructor(private methodsService: MethodsService) {}

  ngOnInit() {
    this.getBankList();
  }

  private async getBankList(): Promise<any> {
    this.bankList = await this.methodsService.getJSON(
      `/assets/i18n/banks.json`
    );
  }

  private async setEnumData(): Promise<any> {
    this.accountEnum = {
      account: this.account,
      alias: this.alias,
      accountType: this.accountType,
      finantialInstitution: this.financialInstitution,
      currency: this.currency,
      accountHolderID: this.accountHolderId
    };
  }

  private async createAccount(): Promise<any> {
    this.setEnumData();
    const data = this.accountEnum;
    console.log(data);
    const request = this.methodsService.post('/thirdparty/', data );
    console.log(request);
  }

  private accountClick(event): void {
    this.accountType = event;
    console.log(this.accountType);
  }
}
