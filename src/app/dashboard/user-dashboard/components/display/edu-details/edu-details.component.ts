import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edu-details',
  templateUrl: './edu-details.component.html',
  styleUrls: ['./edu-details.component.css'],
})
export class EduDetailsComponent implements OnInit {
  @Input()
  edu: any[];
  constructor() {}

  ngOnInit(): void {}
}
