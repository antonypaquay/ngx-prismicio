import { ClientConfig } from '@prismicio/client';

export interface PrismicConfig {
  repositoryNameOrEndpoint: string;
  config?: ClientConfig;
}
