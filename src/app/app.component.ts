import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage: Storage) {
    this.initializeApp();
  }

  public static get bankAPI(): string {
    return 'http://localhost:3001';
  }

  async initializeApp() {
    await this.storage.create();
  }
}
