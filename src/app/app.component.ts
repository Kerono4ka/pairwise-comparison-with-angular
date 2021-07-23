import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  headerTitle = 'Pairwise Comparison';
  titles: string[] = [];
  relationMatrix: number[][] = [];
  bla = 'dsds';

  onItemAdded(item: { title: string }) {
    this.titles = [...this.titles, item.title];
    this.relationMatrix = JSON.parse(JSON.stringify(this.relationMatrix));
    this.relationMatrix.forEach(
      (row: number[]) => (row[this.titles.length - 1] = 0)
    );
    this.relationMatrix.push(Array(this.titles.length).fill(0));
  }

  onChangedRelationMatrix(data: { id: string }) {
    const [i, j] = data.id.split('').map(Number);
    const newRelationMatrix = JSON.parse(JSON.stringify(this.relationMatrix));
    newRelationMatrix[i][j] = 1;
    newRelationMatrix[j][i] = 0;
    this.relationMatrix = newRelationMatrix;
  }

  onItemDeleted(data: { deletedItemIdx: number }) {
    const newTitles = [...this.titles];
    newTitles.splice(data.deletedItemIdx, 1);
    this.titles = newTitles;

    const newRelationMatrix = JSON.parse(JSON.stringify(this.relationMatrix));
    newRelationMatrix.splice(data.deletedItemIdx, 1);
    newRelationMatrix.forEach((row: number[]) => {
      row.splice(data.deletedItemIdx, 1);
    });
    this.relationMatrix = newRelationMatrix;
  }
}
