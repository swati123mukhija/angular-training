import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { Register } from 'src/app/user/model/register';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  userDetail: Register = JSON.parse(localStorage.getItem('userDetail') || '{}');
  profile: any = {};
  constructor(private profileService: ProfileService) {
    console.log(this.userDetail);
  }

  ngOnInit(): void {
    this.profileService.getprofile().subscribe(
      (res) => {},
      (err) => console.log(JSON.stringify(err))
    );
  }
}
