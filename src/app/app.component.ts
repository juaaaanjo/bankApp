import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage, private qrScanner: QRScanner) {
    this.initializeApp();
  }

  public static get bankAPI(): string {
    return 'http://localhost:3001';
  }

  public async initializeApp() {
    await this.storage.create();
    await this.qrScanner.prepare();
  }
}
