import { Component, Input, OnInit } from '@angular/core';
import { TripDetails } from '../models/trip-details.model';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent implements OnInit {
  @Input() tripDetails?: TripDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
