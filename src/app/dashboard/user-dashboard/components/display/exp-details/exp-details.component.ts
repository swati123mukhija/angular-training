import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp-details',
  templateUrl: './exp-details.component.html',
  styleUrls: ['./exp-details.component.css'],
})
export class ExpDetailsComponent implements OnInit {
  @Input()
  exp: any[];
  constructor() {}

  ngOnInit(): void {}
}
