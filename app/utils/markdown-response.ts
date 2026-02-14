/**
 * Utility for building markdown responses with proper headers
 * for AI agents requesting content via Accept: text/markdown
 */

const CONTENT_SIGNAL = 'search=yes, ai-train=no, ai-input=yes';

function estimateTokens(text: string): number {
  // Rough estimate: ~4 characters per token for English markdown
  return Math.ceil(text.length / 4);
}

export function markdownResponse(body: string, status = 200): Response {
  const tokens = estimateTokens(body);

  return new Response(body, {
    status,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Content-Signal': CONTENT_SIGNAL,
      'x-markdown-tokens': String(tokens),
      'Vary': 'Accept',
      'Cache-Control': 'public, s-maxage=2592000, stale-while-revalidate=86400',
    },
  });
}
