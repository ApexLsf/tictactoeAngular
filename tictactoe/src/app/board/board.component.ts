import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {
  @Input() value: 'X'|'O'|undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
