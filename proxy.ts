import { NextRequest, NextResponse } from 'next/server';

/**
 * Proxy that detects Accept: text/markdown requests and rewrites
 * them to internal /api/markdown routes, implementing Markdown for Agents.
 */
export function proxy(request: NextRequest) {
  const accept = request.headers.get('accept') || '';

  if (!accept.includes('text/markdown')) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Skip API routes, static files, and Next.js internals
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon') ||
    pathname.match(/\.\w+$/)
  ) {
    return NextResponse.next();
  }

  // Rewrite to the corresponding markdown API route
  const url = request.nextUrl.clone();

  if (pathname === '/' || pathname === '') {
    url.pathname = '/api/markdown';
  } else if (pathname === '/articles' || pathname === '/articles/') {
    url.pathname = '/api/markdown/articles';
  } else if (pathname.startsWith('/articles/')) {
    const slug = pathname.replace('/articles/', '').replace(/\/$/, '');
    url.pathname = `/api/markdown/articles/${slug}`;
  } else {
    // No markdown route for this path
    return NextResponse.next();
  }

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/', '/articles', '/articles/:slug*'],
};
