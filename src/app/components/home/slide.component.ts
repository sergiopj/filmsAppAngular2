import { Component, OnInit, Input } from '@angular/core';
import { initChangeDetectorIfExisting } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styles: []
})
export class SlideComponent implements OnInit {
  
  // import element of other component
  @Input() films: any;
  @Input() mostRated: any;
  @Input() mostRatedKids: any;
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
