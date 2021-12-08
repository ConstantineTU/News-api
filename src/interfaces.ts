import { ArticlesTypes, SourcesTypes } from "./types";

export interface INewsAndSources {
	sources: Array<SourcesTypes>
	articles: Array<ArticlesTypes>
}

export interface IOptions {
	[key: string]: string;
}