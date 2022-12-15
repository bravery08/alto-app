import { Component, Input, OnInit } from '@angular/core';
import { TripDetails } from '../models/trip-details.model';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  @Input() tripDetails?: TripDetails;

  constructor() { }

  ngOnInit(): void {
  }

  formatTime(dateString: string | undefined) {
    if(dateString === undefined) {
      return ''
    }
    const date = new Date(dateString)
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }

}

