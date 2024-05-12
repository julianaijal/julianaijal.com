const apiUrl = process.env.NEXT_PUBLIC_API_URL
const fetchPosts = async () => {
  try {
    const response = await fetch(`${apiUrl}`, {
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
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export default fetchPosts;
