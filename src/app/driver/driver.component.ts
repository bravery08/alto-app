import { Component, Input, OnInit } from '@angular/core';
import { TripDetails } from '../models/trip-details.model';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {

  @Input() tripDetails?: TripDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
