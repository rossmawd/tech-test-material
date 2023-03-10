import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Tower } from 'src/app/simulation/tower';

@Component({
  selector: 'app-tower',
  templateUrl: './tower.component.html',
})
export class TowerComponent implements OnInit {
  constructor() { }

  @Input() selectedTowerData: Tower | null = null;

  ngOnInit(): void { }
}
