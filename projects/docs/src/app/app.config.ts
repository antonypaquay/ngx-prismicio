import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrismic } from '../../../ngx-prismicio/src/lib/providers/provide-prismic';

import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrismic({
      repositoryNameOrEndpoint: environment.prismic.repositoryNameOrEndpoint,
      config: {
        accessToken: environment.prismic.accessToken,
      },
    })
  ]
};
