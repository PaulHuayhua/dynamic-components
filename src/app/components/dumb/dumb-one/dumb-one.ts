import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dumb-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dumb-one.html',
  styleUrls: ['./dumb-one.scss']
})
export class DumbOneComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() maxClicks: number = 5;
  @Output() limitReached: EventEmitter<string> = new EventEmitter();

  clickCount: number = 0;

  increment() {
    if (this.clickCount < this.maxClicks) {
      this.clickCount++;
      if (this.clickCount === this.maxClicks) {
        this.limitReached.emit(`DumbOne "${this.title}" alcanzó el límite de clics (${this.maxClicks})`);
      }
    }
  }

  reset() {
    this.clickCount = 0;
  }
}
