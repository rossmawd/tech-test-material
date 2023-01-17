import { Component, OnInit, Input } from '@angular/core';
import { Slot } from 'src/app/simulation/slot';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {
  constructor() { }

  @Input() slotData: Slot | null = null
  ngOnInit(): void {
  }

}
