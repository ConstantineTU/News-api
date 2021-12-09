import { ArticlesTypes, SourcesTypes } from './types';

export interface INewsAndSources {
  status: string;
  totalResults: number;
  sources: Array<SourcesTypes>;
  articles: ArticlesTypes[];
}

export interface IOptions {
  [key: string]: string;
}
