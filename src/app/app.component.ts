import { Component } from '@angular/core';
import { tripDetails } from './services/mission';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alto-app';
  tripDetails = tripDetails;
}
