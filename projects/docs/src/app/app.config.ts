import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrismic } from '@wzrdev/ngx-prismicio';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrismic({
      repositoryNameOrEndpoint: 'https://la-caleche.cdn.prismic.io/api/v2',
      config: {
        accessToken: 'MC5hUlBKbUJFQUFDRUFUbmVz.77-9a--_ve-_vRnvv73vv70X77-977-9PO-_vVnvv71DUz8977-977-9eO-_vUlj77-977-977-9Wu-_ve-_ve-_ve-_vQ',
      },
    })
  ]
};
