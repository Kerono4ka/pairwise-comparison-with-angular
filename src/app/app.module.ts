import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { ComparisonTableComponent } from './comparison-table/comparison-table.component';
import { ScoreTableComponent } from './score-table/score-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    ComparisonTableComponent,
    ScoreTableComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
