import { fetchLikes, postLike, calculateLikes } from './likes.js';

describe('fetchLikes', () => {
  it('should return an array with the number of likes', async () => {
    const result = await fetchLikes(123);
    expect(Array.isArray(result)).toBe(true);
    expect(typeof result[0]).toBe('number');
  });

  it('should return an empty array if there is an error', async () => {
    const result = await fetchLikes(-1);
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(0);
  });
});

describe('postLike', () => {
  it('should not throw an error', async () => {
    await expect(postLike(123)).resolves.not.toThrow();
  });
});

describe('calculateLikes', () => {
  it('should update the like count on the DOM', async () => {
    document.body.innerHTML = `
      <div id="item-1">
        <button class="like-btn">
          <span class="like-num"></span>
        </button>
      </div>
      <div id="item-2">
        <button class="like-btn">
          <span class="like-num"></span>
        </button>
      </div>
    `;

    // Mock the fetchLikes function
    global.fetch = jest.fn().mockResolvedValue({ likes: [0] });

    await calculateLikes();

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(document.querySelector('#item-1 .like-num').textContent).toBe('0');
    expect(document.querySelector('#item-2 .like-num').textContent).toBe('0');

    global.fetch.mockRestore();
  });
});