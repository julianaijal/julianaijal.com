import apiFunctions from '../../../utils/api';
import { markdownResponse } from '../../../utils/markdown-response';

export async function GET() {
  try {
    const { data } = await apiFunctions.fetchArticles();
    const articles = data?.articles ?? [];

    const articlesList = articles
      .map(
        (a: { title: string; slug: string; subtitle?: string }) =>
          `- [${a.title}](https://julianaijal.com/articles/${a.slug})${a.subtitle ? `: ${a.subtitle}` : ''}`
      )
      .join('\n');

    const markdown = `---
title: Articles | Julian Aijal
description: Articles written by Julian Aijal
url: https://julianaijal.com/articles
---

# Articles

${articlesList}
`;

    return markdownResponse(markdown);
  } catch (error) {
    console.error('Markdown API error (articles):', error);
    return markdownResponse('# Error\n\nCould not generate markdown.', 500);
  }
}
