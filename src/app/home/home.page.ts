import { Component, OnInit } from '@angular/core';

import * as jQuery from 'jquery';
import { AuthenticationService } from 'src/providers/authentication.service';
import { MethodsService } from 'src/providers/methods.service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public user;
  public accounts;
  public editControl;
  public alias: boolean;
  public scannedData;
  public encodedData: '';
  public encodeData;
  public inputData;
  public accountId;

  constructor(
    private authService: AuthenticationService,
    private methodsService: MethodsService,
    private qrScanner: QRScanner
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.getAccounts();
  }

  private async getAccounts(): Promise<void> {
    this.accounts = await this.methodsService.get('/account');
    console.log(this.accounts);
  }

  private async getUser(): Promise<void> {
    this.user = await this.authService.getUser();
    return this.user;
  }

  private async editAccount(): Promise<void> {
    const request = await this.methodsService.patch(
      `/account/${this.accountId}`,
      {
        alias: this.alias,
      }
    ).then(res =>{
      if (res){
        this.editControl = false;
        window.location.href = '/home';
      }
    });
  }

  private async editAlias(event): Promise<void> {
    this.editControl = true;
    this.accountId = event;
    console.log(this.accountId);
  }

  private async closeEdit(): Promise<void> {
    this.editControl = false;
  }

  private async scanBarcode(): Promise<void> {
    const scanQR = this.qrScanner.scan().subscribe((text: string) => {
      console.log('Scanned something', text);

      this.qrScanner.hide();
      scanQR.unsubscribe();
    });
  }
}
