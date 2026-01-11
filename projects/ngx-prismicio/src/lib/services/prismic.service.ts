import { inject, Injectable } from '@angular/core';
import { Client, ClientConfig, createClient as baseCreateClient } from '@prismicio/client';
import { PRISMIC_CONFIG } from '../providers/provide-prismic';

@Injectable()
export class PrismicService {
  private readonly config = inject(PRISMIC_CONFIG);
  private readonly prismicClient!: Client;

  constructor() {
    const { repositoryNameOrEndpoint, config } = this.config;
    this.prismicClient = this.createClient(repositoryNameOrEndpoint, config);
  }

  public get client(): Client {
    return this.prismicClient;
  }

  private createClient(repositoryNameOrEndpoint: string, config?: ClientConfig): Client {
    return baseCreateClient(repositoryNameOrEndpoint, config);
  }
}
