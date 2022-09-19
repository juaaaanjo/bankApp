import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.page.html',
  styleUrls: ['./create-bank-account.page.scss'],
})
export class CreateBankAccountPage implements OnInit {
  public accountType;
  public alias;
  constructor() {}

  ngOnInit() {}

  accountClick(event) {
    this.accountType = event;
    console.log(this.accountType);
  }
}
