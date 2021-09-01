import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/user/model/register';
import { AuthService } from 'src/app/user/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  register: Register = { name: '', email: '', password: '', password2: '' };
  error: any = {};
  constructor(private authservice: AuthService, private router: Router) {}
  registerSubmit() {
    console.log(JSON.stringify(this.register));
    this.authservice.createUser(this.register).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        this.router.navigate(['/user/login']);
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.error = err;
      }
    );
  }
  ngOnInit(): void {}
}
