import { Component, OnInit } from '@angular/core';
import { MethodsService } from 'src/providers/methods.service';

@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.page.html',
  styleUrls: ['./create-bank-account.page.scss'],
})
export class CreateBankAccountPage implements OnInit {
  public accountEnum: {
    account: number;
    alias: string;
    currency: string;
    accountType: string;
    finantialInstitution: string;
    accountHolderID: string;
  };
  public accountType;
  public alias;
  public bankList;
  public account;
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
    this.accountEnum.account = this.account;
    this.accountEnum.alias = this.alias;
    this.accountEnum.accountType = this.accountType;
    this.accountEnum.finantialInstitution = this.financialInstitution;
    this.accountEnum.currency = this.currency;
  }

  private async createAccount(): Promise<any> {
    this.setEnumData();
    const data = this.accountEnum;
    const request = this.methodsService.post('/thirdparty', { data });
  }

  private accountClick(event): void {
    this.accountType = event;
    console.log(this.accountType);
  }
}
