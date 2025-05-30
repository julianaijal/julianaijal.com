const api = `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/${process.env.HYGRAPH_API_KEY}/master`;

const fetchGraphQL = async (query: string) => {
  try {
    const resp = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.HYGRAPH_AUTH_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: {
        revalidate: 172800, // revalidate every two days
      },
    });
    if (!resp.ok) {
      console.error('Failed to fetch data:', resp.statusText);
      throw new Error(`Network response was not ok: ${resp.statusText}`);
    }
    const data = await resp.json();

    if (!data.data) {
      console.error('Invalid response format:', data);
      throw new Error('Invalid response format');
    }

    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    if (process.env.NODE_ENV === 'production') {
      return null;
    }
    throw error;
  }
};

const fetchArticles = async () => {
  const query = `{
    articles {
      title
      slug
    }
  }`;
  const data = await fetchGraphQL(query);
  return data;
};

const fetchPosts = async () => {
  const query = `{
    externalPostsPluralized {
      title
      url
      symbol { url }
    }
  }`;
  const data = await fetchGraphQL(query);
  return data || { data: { externalPostsPluralized: [] } };
};

const fetchHome = async () => {
  const query = `
  {
    homepages(first: 8) {
      intro {
        raw
        html
        markdown
        text
      }
    }
  }`
  const data = await fetchGraphQL(query);
  return data;
}

const fetchArticleBySlug = async (slug: string) => {
  const query = `{
    articles(where: { slug: "${slug}" }) {
      id
      title
      subtitle
      createdBy {
        id
        name
      }
      headerImage {
        url
        width
        height
      }
      canonicalReference
      canonicalLink
      content {
        html
        markdown
        text
      }
    }
  }`;
  const data = await fetchGraphQL(query);

  if (!data?.data?.articles || data.data.articles.length === 0) {
    console.error('No article found with the provided slug:', slug);
    if (process.env.NODE_ENV === 'production') {
      return null;
    }
    throw new Error('Article not found');
  }

  return data.data.articles[0];
};

const apiFunctions = {
  fetchPosts,
  fetchArticles,
  fetchArticleBySlug,
  fetchHome,
};

export default apiFunctions;
