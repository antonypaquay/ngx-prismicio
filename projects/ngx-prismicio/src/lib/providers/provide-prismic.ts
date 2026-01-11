import { InjectionToken, Provider } from '@angular/core';
import { PrismicService } from '../services/prismic.service';
import { PrismicConfig } from '../config/prismic-config';

export const PRISMIC_CONFIG = new InjectionToken<PrismicConfig>(
  'PRISMIC_CONFIG'
);

export function providePrismic(config: PrismicConfig): Provider[] {
  return [
    {
      provide: PRISMIC_CONFIG,
      useValue: config,
    },
    {
      provide: PrismicService,
      useClass: PrismicService,
    },
  ];
}
