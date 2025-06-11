import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeLandingComponent } from './home/home-landing/home-landing.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeLandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NGTHEMEX';
}
