import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent implements OnInit {
  @Input() titles: string[] = [];
  @Output() itemAdded = new EventEmitter<{ title: string }>();
  errorText = '';
  isItemInputValid = true;

  ngOnInit(): void {}

  onInputChange(value: string) {
    if (this.titles.includes(value)) {
      this.errorText = 'Item with the same name already exist!';
      this.isItemInputValid = false;
    } else {
      this.errorText = '';
      this.isItemInputValid = true;
    }
  }

  onAddComparisonItem(event: Event, titleInput: HTMLInputElement) {
    event.preventDefault();
    const title = titleInput.value;
    if (!title) {
      this.errorText = 'You cannot add an empty item!';
    } else if (!this.titles.includes(title)) {
      this.errorText = '';
      titleInput.value = '';
      this.itemAdded.emit({ title });
    }
  }
}
