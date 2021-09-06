import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Profile } from 'src/app/profile/model/profile';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-display-profiles',
  templateUrl: './display-profiles.component.html',
  styleUrls: ['./display-profiles.component.css'],
})
export class DisplayProfilesComponent implements OnInit {
  profiles: any = [];

  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      (res) => {
        console.log('Response all profile', JSON.stringify(res));
        this.profiles = res;
      },
      (err) => {
        if (err.error.status === '401') {
          this.router.navigate(['/user/login']);
        }
        this.profiles = null;
        console.log('Error::', JSON.stringify(err));
      }
    );
  }
}
