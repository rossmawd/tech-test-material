import { Component } from '@angular/core';
import { TowerService } from './simulation/tower.service';
import { Tower } from './simulation/tower';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tech-test-material';
  $towerData: Observable<any> | undefined

  constructor(public towerService: TowerService) { }

  ngOnInit() {
    this.$towerData = this.towerService.towerData$
  }
}
