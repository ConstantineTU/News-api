import { ArticlesTypes } from "./types";
import { SourcesTypes } from "./types";

export interface INews {
	status: string
	totalResults: number
	articles: ArticlesTypes[]
}

export interface ISources {
	status: string
	sources: SourcesTypes[]
}