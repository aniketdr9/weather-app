import { Component } from '@angular/core';
import { faSnowflake, faTemperatureFull, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  faSnowflake = faSnowflake;
  faTemperatureFull = faTemperatureFull;
  faDroplet = faDroplet;
  faWind = faWind;
}
