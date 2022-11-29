import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


@ViewChild('case') 
export class AppComponent {
  title = 'tictactoe';
  

  
}
