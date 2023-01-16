import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tower',
  templateUrl: './tower.component.html',
  styleUrls: ['./tower.component.css']
})
export class TowerComponent implements OnInit {

  constructor() { }

  @Input() selectedTower: number = 0;
  @Input() selectedTowerData: string = '';

  ngOnInit(): void {
  }

}
