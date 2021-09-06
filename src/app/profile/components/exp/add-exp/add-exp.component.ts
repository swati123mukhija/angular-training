import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css'],
})
export class AddExpComponent implements OnInit {
  experience: any = {};
  errors: any = {};

  constructor(private profileService: ProfileService, private router: Router) {}

  experienceSubmit() {
    this.profileService.createExperience(this.experience).subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        this.router.navigate(['/dashboard/user']);
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.errors = err;
      }
    );
  }

  ngOnInit(): void {}
}
