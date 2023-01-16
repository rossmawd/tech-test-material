import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-farm-visualiser',
  templateUrl: './farm-visualiser.component.html',
  styleUrls: ['./farm-visualiser.component.css']
})
export class FarmVisualiserComponent implements OnInit {

  constructor() { }

  @Input() towerData: string = ''

  ngOnInit(): void {
  }

}
