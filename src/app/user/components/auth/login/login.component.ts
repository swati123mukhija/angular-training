import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/user/model/login';
import { AuthService } from 'src/app/user/service/auth.service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: Login = { email: '', password: '' };
  decoded: any = {};

  constructor(private authservice: AuthService, private router: Router) {}

  loginSubmit() {
    console.log(JSON.stringify(this.login));
    this.authservice.createUserLogin(this.login).subscribe((res) => {
      // console.log(JSON.stringify(res.token));
      this.decoded = jwt_decode(res.token);
      //console.log(this.decoded);
      localStorage.setItem('userDetail', JSON.stringify(this.decoded));
      localStorage.setItem('token', res.token);
    });
    this.router.navigate(['/dashboard/user']);
  }

  ngOnInit(): void {}
}
