import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css'],
})
export class AddEduComponent implements OnInit {
  education: any = {};
  errors: any = {};

  constructor(private profileService: ProfileService, private router: Router) {}

  educationSubmit() {
    this.profileService.createEducation(this.education).subscribe(
      (res) => {
        this.router.navigate(['/dashboard/user']);
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.errors = err.error;
      }
    );
  }

  ngOnInit(): void {}
}
