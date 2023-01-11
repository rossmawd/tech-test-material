import { Component } from '@angular/core';
import { TowerService } from './simulation/tower.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tech-test-material';

  constructor(public towerService: TowerService) {

  }
}
