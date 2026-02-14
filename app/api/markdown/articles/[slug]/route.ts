import apiFunctions from '../../../../utils/api';
import { markdownResponse } from '../../../../utils/markdown-response';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  try {
    const data = await apiFunctions.fetchArticleBySlug(slug);

    if (!data) {
      return markdownResponse('# Not Found\n\nArticle not found.', 404);
    }

    const contentMarkdown = data.content?.markdown || '';
    const date = data.createdAt
      ? new Date(data.createdAt).toLocaleDateString('en-GB', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : '';

    const frontmatter = [
      '---',
      `title: ${data.title}`,
      data.subtitle ? `description: ${data.subtitle}` : null,
      `url: https://julianaijal.com/articles/${slug}`,
      data.headerImage?.url ? `image: ${data.headerImage.url}` : null,
      date ? `date: ${date}` : null,
      data.canonicalReference && data.canonicalLink
        ? `canonical: ${data.canonicalLink}`
        : null,
      '---',
    ]
      .filter(Boolean)
      .join('\n');

    const canonical =
      data.canonicalReference && data.canonicalLink
        ? `\n*Originally published at [${new URL(data.canonicalLink).hostname}](${data.canonicalLink})*\n`
        : '';

    const markdown = `${frontmatter}

# ${data.title}

${date ? `*${date}*\n` : ''}${canonical}
${contentMarkdown}
`;

    return markdownResponse(markdown);
  } catch (error) {
    console.error('Markdown API error (article):', error);
    return markdownResponse('# Error\n\nCould not generate markdown.', 500);
  }
}
