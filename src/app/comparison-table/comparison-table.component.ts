import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-comparison-table',
  templateUrl: './comparison-table.component.html',
  styleUrls: ['./comparison-table.component.css'],
})
export class ComparisonTableComponent implements OnInit, OnChanges {
  @Input() titles: string[] = [];
  @Input() relationMatrix: number[][] = [];
  @Output() changedRelationMatrix = new EventEmitter<{ id: string }>();

  comparisonPairs: {
    id: string;
    title: string;
    row: number;
    column: number;
  }[][] = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.comparisonPairs = [];
    if (!this.titles || this.titles.length < 2) {
      return;
    }

    for (let i = 0; i < this.titles.length; i++) {
      for (let j = i + 1; j < this.titles.length; j++) {
        this.comparisonPairs.push([
          { id: `${i}${j}`, title: this.titles[i], row: i, column: j },
          { id: `${j}${i}`, title: this.titles[j], row: j, column: i },
        ]);
      }
    }
  }

  onRelationChange(event: Event) {
    const id = (event.target! as HTMLButtonElement).id;
    this.changedRelationMatrix.emit({ id });
  }
}
