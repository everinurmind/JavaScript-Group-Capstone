const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

export const fetchLikes = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/apps/ipgqEHaKcpkeW71IX5YM/likes/${id}`);
    const data = await response.json();
    return data.likes || [0];
  } catch (error) {
    return [0];
  }
};

export const postLike = async (id) => {
  try {
    await fetch(`${BASE_URL}/apps/ipgqEHaKcpkeW71IX5YM/likes/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item_id: id }),
    });
  } catch (error) {
    // Do nothing
  }
};

export const calculateLikes = async () => {
  const likeBtns = document.querySelectorAll('.like-btn');
  const ids = Array.from(likeBtns, (btn) => btn.parentElement.getAttribute('id'));
  try {
    const responses = await Promise.all(ids.map(fetchLikes));
    const likeCounts = responses.map((response) => response[0]);
    likeBtns.forEach((btn, i) => {
      const [likeCount] = btn.querySelectorAll('.like-num');
      likeCount.textContent = likeCounts[i];
    });
  } catch (error) {
    // Do nothing
  }
};