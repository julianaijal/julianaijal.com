const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const fetchPosts = async () => {
  const query = JSON.stringify({
    query: `{
      externalPostsPluralized {
        title
        url
        symbol { url }
      }
    }`,
  });

  try {
    const response = await fetch(`${apiUrl}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: query,
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export default fetchPosts;
