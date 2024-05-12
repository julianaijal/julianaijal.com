const fetchPosts = async () => {
  try {
    const response = await fetch(
      `https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/${process.env.NEXT_PUBLIC_GRAPHCMS_API_KEY}/master`,
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
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export default fetchPosts;