import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './search.pipe';
import { OrderbyPipe } from './orderby.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchPipe, OrderbyPipe],
  exports: [SearchPipe, OrderbyPipe]
})
export class PipesModule { }
