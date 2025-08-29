import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dumb-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dumb-three.html',
  styleUrls: ['./dumb-three.scss']
})
export class DumbThreeComponent {
  @Input() step: number = 1;
  @Input() multipleCheck: number = 5;
  @Output() multipleReached: EventEmitter<number> = new EventEmitter();

  count: number = 0;

  increment() {
    this.count += this.step;
    this.checkMultiple();
  }

  decrement() {
    this.count -= this.step;
    this.checkMultiple();
  }

  private checkMultiple() {
    if(this.count !== 0 && this.count % this.multipleCheck === 0) {
      this.multipleReached.emit(this.count);
    }
  }

  reset() {
    this.count = 0;
  }
}
