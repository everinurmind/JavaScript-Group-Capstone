const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

export const fetchLikes = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/apps/LwQHc3Vs1lC9z58aI8eY/likes/${id}`);
    const data = await response.json();
    return data.likes || [0];
  } catch (error) {
    return [];
  }
};

export const postLike = async (id) => {
  try {
    await fetch(`${BASE_URL}/apps/LwQHc3Vs1lC9z58aI8eY/likes/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: id }),
    });
  } catch (error) {
    // Do nothing
  }
};