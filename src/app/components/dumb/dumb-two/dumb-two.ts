import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dumb-two',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dumb-two.html',
  styleUrls: ['./dumb-two.scss']
})
export class DumbTwoComponent {
  @Input() listItems: string[] = [];
  @Output() listChange: EventEmitter<string[]> = new EventEmitter();
  newItem: string = '';
  ascending: boolean = true;

  addItem() {
    const trimmed = this.newItem.trim();
    if(trimmed && !this.listItems.includes(trimmed)) {
      this.listItems.push(trimmed);
      this.emitList();
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.listItems.splice(index, 1);
    this.emitList();
  }

  toggleSort() {
    this.ascending = !this.ascending;
    this.listItems.sort((a, b) => this.ascending ? a.localeCompare(b) : b.localeCompare(a));
    this.emitList();
  }

  private emitList() {
    this.listChange.emit([...this.listItems]);
  }
}
