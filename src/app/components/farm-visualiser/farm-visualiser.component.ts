import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Tower } from 'src/app/simulation/tower';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-farm-visualiser',
  templateUrl: './farm-visualiser.component.html',
  styleUrls: ['./farm-visualiser.component.css'],
})
export class FarmVisualiserComponent implements OnInit {
  constructor() { }

  @Input() $towerData: Observable<any> | undefined;
  towerData: Tower[] = [];
  selectedTower: number = 0;
  selectedTowerData: Tower | null = null;

  changeTower(value: string) {
    window.scrollTo(0, 0)
    if (value == 'back' && this.selectedTower > 0) {
      this.selectedTower--;
      this.selectedTowerData = this.towerData[this.selectedTower];
    } else if (
      value == 'next' &&
      this.selectedTower < this.towerData.length - 1
    ) {
      this.selectedTower++;
      this.selectedTowerData = this.towerData[this.selectedTower];
    }
    console.log('new tower selected', this.selectedTower);
  }

  ngOnInit(): void {
    if (this.$towerData) {
      this.$towerData.subscribe((val) => {
        this.towerData = val;
        // setting the initial tower to be displayed
        this.selectedTowerData = this.towerData[this.selectedTower];
      });
    }
  }
}
