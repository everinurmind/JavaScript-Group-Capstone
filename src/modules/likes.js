export const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
export const APP_ID = 'LwQHc3Vs1lC9z58aI8eY';

export const fetchLikes = async (id) => {
  const response = await fetch(`${BASE_URL}/apps/${APP_ID}/likes`);
  const data = await response.json();
  const likes = data.find((item) => item.item_id === id)?.likes || 0;
  return likes;
};

export const postLike = async (id, count) => {
  await fetch(`${BASE_URL}/apps/${APP_ID}/likes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ item_id: id, likes: count }),
  });
};

export const calculateLikes = async () => {
  const likeButtons = document.querySelectorAll('.like-btn');
  const itemIds = Array.from(likeButtons, (btn) => btn.parentElement.getAttribute('id'));
  const likeCounts = await Promise.all(itemIds.map((id) => fetchLikes(id)));
  likeCounts.forEach((likes, i) => {
    const likeCountElem = likeButtons[i].querySelector('.like-num');
    likeCountElem.textContent = likes;
  });
};
