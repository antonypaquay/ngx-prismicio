import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrismicService } from '@wzrdev/ngx-prismicio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'docs';

  private readonly prismic = inject(PrismicService);

  public ngOnInit(): void {
    this.prismic.client.getByUID('page', 'hotel').then(doc => console.log(doc));
  }
}
