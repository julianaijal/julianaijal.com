import apiFunctions from '../../utils/api';
import { markdownResponse } from '../../utils/markdown-response';

export async function GET() {
  try {
    const [homeResult, articlesResult] = await Promise.all([
      apiFunctions.fetchHome(),
      apiFunctions.fetchArticles(),
    ]);

    const introMarkdown =
      homeResult?.data?.homepages?.[0]?.intro?.markdown || '';
    const articles = articlesResult?.data?.articles ?? [];

    const articlesList = articles
      .map(
        (a: { title: string; slug: string; subtitle?: string }) =>
          `- [${a.title}](https://julianaijal.com/articles/${a.slug})${a.subtitle ? `: ${a.subtitle}` : ''}`
      )
      .join('\n');

    const markdown = `---
title: Julian Aijal
description: Hi, I'm Julian Aijal.
url: https://julianaijal.com
---

# Julian Aijal

${introMarkdown}

## Articles

${articlesList}
`;

    return markdownResponse(markdown);
  } catch (error) {
    console.error('Markdown API error (homepage):', error);
    return markdownResponse('# Error\n\nCould not generate markdown.', 500);
  }
}
