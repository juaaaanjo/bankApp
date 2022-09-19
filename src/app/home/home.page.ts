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
  public scannedData: any;
  public encodedData: '';
  public encodeData: any;
  public inputData: any;
  constructor(
    private authService: AuthenticationService,
    private methodsService: MethodsService,
    private qrScanner: QRScanner,

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

  private async editAccount(event): Promise<void> {
    console.log(event);
    this.editControl = true;
    const request = await this.methodsService.put('/account', { alias: event });
  }

 private async scanBarcode(): Promise<void>{
       const scanQR = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);

         this.qrScanner.hide(); // hide camera preview
         scanQR.unsubscribe(); // stop scanning
       });
  }

}
