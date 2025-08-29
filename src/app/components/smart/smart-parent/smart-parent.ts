import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DumbOneComponent } from '../../dumb/dumb-one/dumb-one';
import { DumbTwoComponent } from '../../dumb/dumb-two/dumb-two';
import { DumbThreeComponent } from '../../dumb/dumb-three/dumb-three';

@Component({
  selector: 'app-smart-parent',
  standalone: true,
  imports: [CommonModule, DumbOneComponent, DumbTwoComponent, DumbThreeComponent],
  templateUrl: './smart-parent.html',
  styleUrls: ['./smart-parent.scss']
})
export class SmartParentComponent {
  dumbTwoItems: string[] = ['Item 1', 'Item 2'];
  messages: string[] = [];
  lastMultiple: number | null = null;

  onDumbOneLimit(message: string) {
    this.messages.push(message);
  }

  onDumbTwoChange(list: string[]) {
    this.messages.push(`Lista actualizada: ${list.join(', ')}`);
  }

  onDumbThreeMultiple(count: number) {
    this.lastMultiple = count;
    this.messages.push(`DumbThree alcanzó múltiplo: ${count}`);
  }
}
