import { Component, OnInit } from '@angular/core';
import { tripDetails } from '../services/mission';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly tripDetails = tripDetails;
  
  constructor() { }

  ngOnInit(): void {
  }

}
