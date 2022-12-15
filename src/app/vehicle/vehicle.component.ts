import { Component, Input, OnInit } from '@angular/core';
import { TripDetails } from '../models/trip-details.model';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  @Input() tripDetails?: TripDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
