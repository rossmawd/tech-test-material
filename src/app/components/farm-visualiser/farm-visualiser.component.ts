import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Tower } from 'src/app/simulation/tower';

@Component({
  selector: 'app-farm-visualiser',
  templateUrl: './farm-visualiser.component.html',
  styleUrls: ['./farm-visualiser.component.css'],
})
export class FarmVisualiserComponent implements OnInit {
  constructor() { }

  @Input() towerData: Tower[] = [];
  selectedTower: number = 0;
  selectedTowerData: Tower | null = null;

  changeTower(value: string) {
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

  ngOnInit(): void { }

  // setting selectedTowerData when the subscription has returned its first value
  ngOnChanges(changes: any): void {
    if (
      !this.selectedTowerData &&
      changes['towerData'].currentValue.length > 0
    ) {
      this.selectedTowerData =
        changes['towerData'].currentValue[this.selectedTower];
      console.log('changes have happened');
    }
  }
}
