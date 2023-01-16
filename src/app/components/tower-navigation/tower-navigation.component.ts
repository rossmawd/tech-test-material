import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tower-navigation',
  templateUrl: './tower-navigation.component.html',
  styleUrls: ['./tower-navigation.component.css'],
})
export class TowerNavigationComponent implements OnInit {
  constructor() { }

  @Output() changeTowerEvent = new EventEmitter<string>();

  changeTower(value: 'next' | 'back') {
    this.changeTowerEvent.emit(value);
  }

  ngOnInit(): void { }
}
