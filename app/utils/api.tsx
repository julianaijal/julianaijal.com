const fetchPosts = async () => {
  try {
    const response = await fetch(
      `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/${process.env.HYGRAPH_API_KEY}/master`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `{
            externalPostsPluralized {
              title
              url
              symbol { url }
            }
          }`,
        }),
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch posts:', response.statusText);
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);

    if (process.env.NODE_ENV === 'production') {
      return { data: { externalPostsPluralized: [] } };
    }

    throw error;
  }
};

export default fetchPosts;