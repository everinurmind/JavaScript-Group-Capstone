import createPokemon from '../index.js';
class ShowComments {
    static commentPopup = (pokemon) => {

        // ─── Comment Modal ───────────────────────────────────────────

        const modal = document.querySelector('.modal');
        modal.style.display = 'block';
        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');

        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close');
        closeBtn.innerHTML = `&times;`;
        closeBtn.addEventListener('click', () => {
            // modal.style.display = 'none';
            modal.parentNode.removeChild(modal);
        });

        const title = document.createElement('p');
        title.innerHTML = `<h2 class="t-headline">Comment <span class="t-span">Window</span></h2>`;

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
        const commentDetails = `<div class="comments-details-box">
        <h2 class="commentTitle">Comments <span class="badge">4</span></h2> <hr class="line"> 
        <div class="commentBox"> 
            <div class="comment-area">
                <div class="comment">
                    <span class="player">22/03/2023 { Jose }</span>
                    Hello I really like this comment
                </div>
                  <div class="comment">
                    <span class="player">22/03/2023 { Nurbol }</span>
                    Hello I really like this comment
                 </div>
                 <div class="comment">
                    <span class="player">22/03/2023 { Cosmos } </span>
                    Hello I really like this comment
                </div>
            </div>
        </div>
        </div>`;
        commentInfo.innerHTML = commentDetails;
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
        commentForm.appendChild(submitComment);
        commentMessage.appendChild(commentForm);

        modalContent.appendChild(commentMessage);
        modal.appendChild(modalContent);

    }

}


const CommentModal = () => {


}

export default ShowComments;