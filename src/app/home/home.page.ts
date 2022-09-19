import { Component, OnInit } from '@angular/core';

import * as jQuery from 'jquery';
import { AuthenticationService } from 'src/providers/authentication.service';
import { MethodsService } from 'src/providers/methods.service';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

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
    private barcodeScanner: BarcodeScanner
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
    const options: BarcodeScannerOptions = {
      preferFrontCamera: false,
      showFlipCameraButton: true,
      showTorchButton: true,
      torchOn: false,
      prompt: 'Place a barcode inside the scan area',
      resultDisplayDuration: 500,
      formats: 'EAN_13,EAN_8,QR_CODE,PDF_417 ',
      orientation: 'portrait',
    };

    this.barcodeScanner.scan(options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scannedData = barcodeData;

    }).catch(err => {
      console.log('Error', err);
    });
  }

}
