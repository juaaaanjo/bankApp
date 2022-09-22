import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as jQuery from 'jquery';
import { AuthenticationService } from '../../providers/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email;
  public password;
  public process;
  public msg;
  public msgString;

  constructor(
    private authService: AuthenticationService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.passwordHidden();
  }

  private passwordHidden(): void {
    jQuery('.toggle-password').click(function() {
      jQuery(this).toggleClass('icon-eye icon-eye-off');
      const input = jQuery(jQuery(this).attr('toggle'));
      if (input.attr('type') === 'password') {
        input.attr('type', 'text');
      } else {
        input.attr('type', 'password');
      }
    });
  }

  private login(): void {
    if (this.email && this.password) {
      this.email = this.email.toLowerCase().trim();
      this.process = true;
      this.authService.login(this.email, this.password);

      this.navCtrl.navigateForward(['/home']);
      this.process = false;
    }
  }
}
