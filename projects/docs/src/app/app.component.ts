import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsLinkPipe } from 'ngx-prismicio/helpers';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsLinkPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'docs';
}
