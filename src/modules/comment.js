const getUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8x2LmEAhsHWapmVM1aOR/comments';
class CommentData {
  // ─── Comment Counter ─────────────────────────────────────────────────

    static commentCounter = async (pokemonId) => {
      const res = await fetch(`${getUrl}?item_id=${pokemonId}`);
      const data = await res.json();

      const badge = document.querySelector('.badge');
      const counter = data.length;
      if (counter === undefined) {
        badge.innerHTML = 0;
      }
      badge.innerHTML = counter;
    }
    // ─── Add Comment ─────────────────────────────────────────────────────────────

    static addComment = async (pokemonId, name, comments, commentArea) => {
      const res = await fetch(`${getUrl}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: pokemonId,
          username: name,
          comment: comments,
        }),
      });
      this.commentCounter(pokemonId);
      this.loadComments(pokemonId, commentArea);
      return res;
    }

    // ─── Load Comment ────────────────────────────────────────────

    static loadComments = async (pokemonId, commentArea) => {
      const res = await fetch(`${getUrl}?item_id=${pokemonId}`);
      const data = await res.json();
      data.forEach((comment) => {
        const commentTextBox = document.createElement('div');
        commentTextBox.classList.add('comment');
        const commentText = document.createElement('span');
        commentText.classList.add('player');
        commentText.innerHTML = `${comment.creation_date} { ${comment.username} } ${comment.comment}`;
        commentTextBox.appendChild(commentText);
        commentArea.appendChild(commentTextBox);
      });
      this.commentCounter(pokemonId);
    }
}
export default CommentData;