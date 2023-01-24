import { Component, OnInit, OnDestroy } from '@angular/core';
import { Tower } from 'src/app/simulation/tower';
import { TowerService } from 'src/app/simulation/tower.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-farm-visualiser',
  templateUrl: './farm-visualiser.component.html',
})
export class FarmVisualiserComponent implements OnInit, OnDestroy {
  constructor(public towerService: TowerService) { }

  $towerData: Observable<any> = this.towerService.towerData$
  private sub: Subscription | undefined;
  towerData: Tower[] = [];
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
  }

  ngOnInit(): void {
    if (this.$towerData) {
      this.sub = this.$towerData.subscribe((val) => {
        this.towerData = val;
        // setting the initial tower to be displayed
        this.selectedTowerData = this.towerData[this.selectedTower];
      });
    }
  }


  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
}
