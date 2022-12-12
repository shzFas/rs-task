type NewsItem = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: { id: string; name: string };
    title: string;
    url: string;
    urlToImage: string;
};

type SourceItem = {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
};