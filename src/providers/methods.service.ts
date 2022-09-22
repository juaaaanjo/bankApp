import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app/app.component';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class MethodsService {
  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) {}

  public async get(
    request: string,
    payload?: Record<string, any>
  ): Promise<any> {
    try {
      const result = await this.http
        .get<any>(`${AppComponent.bankAPI}${request}`, payload)
        .pipe(map((res) => res))
        .toPromise();

      return result;
    } catch (error) {
      return this.handleError(error);
    }
  }

  public async post(
    request: string,
    payload?: Record<string, any>
  ): Promise<any> {
    try {
      const response = await this.http
        .post<any>(`${AppComponent.bankAPI}${request}`, payload)
        .pipe(map((res) => res))
        .toPromise();

      return response;
    } catch (error) {
      return this.handleError(error);
    }
  }

  async patch(request: string, data: any, toLower: boolean = true) {
    try {
      const result = await this.http
        .patch(AppComponent.bankAPI + request, data)
        .pipe(map((res) => res))
        .toPromise();

      return result;
    } catch (error) {
      return this.handleError(error);
    }
  }

  public async getJSON(path) {
    try {
      const result = await this.http
        .get(path)
        .pipe(map((res) => res))
        .toPromise();
      return result;
    } catch (error) {
      return this.handleError(error);
    }
  }

  private async handleError(error) {
    const toast = await this.toastController.create({
      message: error.message,
      duration: 2000,
      color: 'danger',
    });

    toast.present();

    return error.message;
  }
}
