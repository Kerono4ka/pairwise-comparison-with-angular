import {
  Component,
  Input,
  Output,
  OnInit,
  OnChanges,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-score-table',
  templateUrl: './score-table.component.html',
  styleUrls: ['./score-table.component.css'],
})
export class ScoreTableComponent implements OnInit, OnChanges {
  @Input() titles: string[] = [];
  @Input() relationMatrix: number[][] = [];
  @Output() deletedItem = new EventEmitter<{ deletedItemIdx: number }>();

  readonly defaultHeaderTitles = ['Item', 'Score', 'Winner'];
  headerTitles = this.defaultHeaderTitles;
  itemsScore: number[] = [];
  maxScore = -1;

  constructor() {}
  ngOnInit(): void {}

  ngOnChanges() {
    this.itemsScore = this.relationMatrix.map((itemScore) =>
      itemScore.reduce((a, b) => a + b, 0)
    );
    this.maxScore = Math.max(...this.itemsScore);

    if (this.titles.length > 0) {
      this.headerTitles = [...this.defaultHeaderTitles, ''];
    } else {
      this.headerTitles = this.defaultHeaderTitles;
    }
  }

  onItemDelete(title: string) {
    const deletedItemIdx = this.titles.indexOf(title);
    this.deletedItem.emit({ deletedItemIdx });
  }
}
