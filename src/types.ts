

export type ArticlesTypes = {
	source: {
		id: string
		name: string
	}
	author: string
	title: string
	description: string
	url: string
	urlToImage: string
	publishedAt: string
	content: string
}

export type SourcesTypes = {
	id: string
	name: string
	description: string
	url: string
	category: string
	language: string
	country: string
}

export type CallBack = <T>(data?: T) => void;