export const fetchLikes = async (id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Fk5Ln5W8Rv0aA5RhKjoi/likes/${id}`);
    const data = await response.json();
    return data.likes || 0;
  } catch (error) {
    return 0;
  }
};

export const postLike = async (id) => {
  try {
    await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Fk5Ln5W8Rv0aA5RhKjoi/likes/${id}`, {
      method: 'POST',
    });
  } catch (error) {
    // Do nothing
  }
};
