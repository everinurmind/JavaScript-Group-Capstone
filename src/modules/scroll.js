export const handleScroll = () => {
  const scrollBtn = document.getElementById('scroll-to-top-btn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
};

export const handleScrollTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
