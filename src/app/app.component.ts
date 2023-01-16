import { Component } from '@angular/core';
import { TowerService } from './simulation/tower.service';
import { Tower } from './simulation/tower';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tech-test-material';
  towerData: Tower[] = [];

  constructor(public towerService: TowerService) { }

  ngOnInit() {
    this.towerService.towerData$.subscribe((val: Tower[]) => {
      console.log(val);
      this.towerData = val;
    });
  }
}
