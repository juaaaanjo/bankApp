import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
import { AppComponent } from '../app/app.component';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private storage: Storage,
    private navCtrl: NavController
  ) {}

  public async login(user: string, password: string): Promise<any> {
    console.log('intento iniciar sesion');
    const request = await this.http
      .post<any>(AppComponent.bankAPI + 'users/login', {
        email: user.toLowerCase().trim(),
        password,
      })
      .pipe(map((res) => res))
      .toPromise();

    console.log(request);

    if (!request.error) {
      await this.storage.set('auth_token', request.access_token);
      await this.storage.set('id-user', request.user.id);
    }

    const userObject = request;
    console.log(userObject.user);
    this.storage.set('user', JSON.stringify(userObject.user));

    return userObject;

  }

 public async getUser(): Promise<any>  {
    const user = await this.storage.get('user');
    return user ? JSON.parse(user) : null;
  }

  /*  if (!request.error) {
      await this.storage.set('auth_token', request.access_token);
      await this.storage.set('id-user', request.user.id);
    }

    const userObject = request;
    console.log(userObject.user);
    this.storage.set('user', JSON.stringify(userObject.user));

    return userObject; */
}
