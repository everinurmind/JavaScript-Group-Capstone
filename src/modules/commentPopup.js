import CommentData from './comment.js';

const modal = async (pokemon) => {
  // ─── Comment Modal ───────────────────────────────────────────
  const modal = document.querySelector('.modal');
  modal.style.display = 'block';
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const closeBtn = document.createElement('span');
  closeBtn.classList.add('close');
  closeBtn.innerHTML = '&times;';
  closeBtn.addEventListener('click', () => {
    modal.removeChild(modalContent);
    modal.style.display = 'none';
  });

  const title = document.createElement('p');
  title.innerHTML = '<h2 class="t-headline">Comment <span class="t-span">Window</span></h2>';

  modalContent.appendChild(closeBtn);
  modalContent.appendChild(title);

  // ─── Display Image and Details Section ─────────────────────────

  const commentContent = document.createElement('div');
  const pokemonDetails = `<div class="comments-details-box">
     <div class="comment_ImgBox">
         <img class="comment_img" src="${pokemon.sprites.front_default}" alt="">
     </div> <p class="pokemon_name">${pokemon.name}</p><hr class="line"> 
     <div class="infoContainer"><div class="pokemon_details">
             <p class="info">Base Experiemce: ${pokemon.base_experience}.</p>
             <p class="info">Height: ${pokemon.height}</p>
         </div><div class="pokemon_details"><p class="info">Weight: ${pokemon.weight}</p>
         </div>
     </div>
 
 </div>`;
  commentContent.innerHTML = pokemonDetails;
  modalContent.appendChild(commentContent);

  // ─── Comment Section ─────────────────────────────────────────
  const commentInfo = document.createElement('div');
  const userComment = document.createElement('div');
  userComment.classList.add('comments-details-box');
  const commentTitle = document.createElement('h2');
  commentTitle.classList.add('commentTitle');
  commentTitle.innerHTML = 'Comments ';
  const badge = document.createElement('span');
  badge.classList.add('badge');
  commentTitle.appendChild(badge);
  const line = document.createElement('hr');
  line.classList.add('line');
  userComment.appendChild(commentTitle);
  userComment.appendChild(line);
  const commentBox = document.createElement('div');
  commentBox.classList.add('commentBox');
  userComment.appendChild(commentBox);
  const commentArea = document.createElement('div');
  commentArea.classList.add('comment-area');

  commentBox.appendChild(commentArea);

  CommentData.loadComments(pokemon.id, commentArea);

  commentInfo.appendChild(userComment);
  modalContent.appendChild(commentInfo);

  // ─── Comment Submission Form ────────────────────────────────────────────

  const commentMessage = document.createElement('div');
  commentMessage.classList.add('commentMessage');
  const commentForm = document.createElement('form');

  const playName = document.createElement('input');
  playName.setAttribute('type', 'text');
  playName.setAttribute('required', 'required');
  playName.setAttribute('placeholder', 'Your Name');
  commentForm.appendChild(playName);

  const commentTextarea = document.createElement('textarea');
  commentTextarea.setAttribute('placeholder', 'Your Insights');
  commentTextarea.setAttribute('required', 'required');
  commentForm.appendChild(commentTextarea);

  const submitComment = document.createElement('button');
  submitComment.classList.add('submitComment');
  submitComment.setAttribute('type', 'submit');
  submitComment.innerHTML = 'Comment';
  submitComment.addEventListener('click', () => {
    if ((playName.value && commentTextarea.value) !== '') {
      CommentData.addComment(pokemon.id, playName.value, commentTextarea.value, commentArea);
      playName.value = '';
      commentTextarea.value = '';
    }
  });

  commentForm.appendChild(submitComment);
  commentMessage.appendChild(commentForm);

  modalContent.appendChild(commentMessage);
  modal.appendChild(modalContent);
};

class ShowComments {
    static commentPopup = async (pokemon) => {
      modal(pokemon);
    }
}

export default ShowComments;