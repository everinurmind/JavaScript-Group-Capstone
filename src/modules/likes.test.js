import { fetchLikes, postLike, calculateLikes } from './likes.js';

describe('fetchLikes', () => {
  it('should return the number of likes', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => Promise.resolve([{ item_id: 123, likes: 42 }]),
    });

    const result = await fetchLikes(123);

    expect(result).toBe(42);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LwQHc3Vs1lC9z58aI8eY/likes',
    );

    global.fetch.mockRestore();
  });

  it('should return 0 if there is an error', async () => {
    global.fetch = jest.fn().mockRejectedValueOnce({ message: 'Fetch error' });

    try {
      const result = await fetchLikes(123);
      expect(result).toBe(0);
    } catch (error) {
      expect(error).toBeDefined();
    }

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LwQHc3Vs1lC9z58aI8eY/likes',
    );

    global.fetch.mockRestore();
  });
});

describe('postLike', () => {
  it('should not throw an error', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce();

    await expect(postLike(123, 42)).resolves.not.toThrow();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LwQHc3Vs1lC9z58aI8eY/likes',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item_id: 123, likes: 42 }),
      },
    );

    global.fetch.mockRestore();
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

    global.fetch = jest.fn()
      .mockResolvedValueOnce({ json: () => Promise.resolve([{ item_id: 'item-1', likes: 42 }, { item_id: 'item-2', likes: 13 }]) })
      .mockResolvedValueOnce({ json: () => Promise.resolve([{ item_id: 'item-1', likes: 44 }, { item_id: 'item-2', likes: 15 }]) });

    await calculateLikes();

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LwQHc3Vs1lC9z58aI8eY/likes',
    );
    expect(document.querySelector('#item-1 .like-num').textContent).toBe('42');
    expect(document.querySelector('#item-2 .like-num').textContent).toBe('15');

    global.fetch.mockRestore();
  });
});
