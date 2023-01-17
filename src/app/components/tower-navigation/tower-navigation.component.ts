import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tower-navigation',
  templateUrl: './tower-navigation.component.html',
})
export class TowerNavigationComponent implements OnInit {
  constructor() { }

  @Output() changeTowerEvent = new EventEmitter<string>();
  @Input() selectedTower: number = 0

  changeTower(value: 'next' | 'back') {
    this.changeTowerEvent.emit(value);
  }

  ngOnInit(): void { }
}
