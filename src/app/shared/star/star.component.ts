import { Component, OnChanges, SimpleChanges, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
@Input() rating: number = 0
cropWidth: number = 75
@Output() ratingClicked: EventEmitter<string> =
new EventEmitter<string>();
  constructor() { }


ngOnChanges(changes: SimpleChanges): void {
  this.cropWidth = this.rating * 75/5;
}

onClick(): void{
  
this.ratingClicked.emit(` ${this.rating} Stars`)
}
}
