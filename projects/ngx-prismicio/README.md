# NgxPrismicio

This project offers support and utilities to simplify building Angular applications with Prismic.

> ℹ️ **Note**  
> This project is in early development. Keep an eye out for updates.

## Installation

### Requirements

Angular 19.2.0 or higher is required.

```bash
npm i @wzrdev/ngx-prismicio
```

## Prismic client

Provides a Prismic client to your application. This client can be used throughout the app to fetch content from Prismic.

```ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrismic } from '@wzrdev/ngx-prismicio';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrismic({
      repositoryNameOrEndpoint: "your-repo-name",
      // Optional configuration
      config: {
        // For private repositories
        accessToken: "<your-access-token>",
      },
    })
  ]
};
```

```ts
import { Component, inject, OnInit } from '@angular/core';
import { PrismicService } from '@wzrdev/ngx-prismicio';

@Injectable()
export class MyService {
  private readonly prismic = inject(PrismicService);

  public getDocument(): void {
    this.prismic.client.getByUID('page', 'about-us').then(doc => console.log(doc));
  }
}
```

## Content helpers

Provides helpers that manipulate Prismic content. The helpers can be used throughout your website or in scripts.

### Usage

Import the helpers in your application:

```ts
import { AsTextPipe } from '@wzrdev/ngx-prismicio/helpers';
```

Use the pipe in your template:

```html
<p>{{ document.data.content | asText }}</p>
```
