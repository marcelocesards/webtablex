import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeCompComponent } from './view/home-comp/home-comp.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    HomeCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webtablex';
}
