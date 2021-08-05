const createAnalytics = () => {
  let counter = 0;
  let isDestroyed = false;
  const lisneter = () => {
    counter++;
  }
  document.addEventListener('click', lisneter);

  return {
    destroy() {
      document.removeEventListener('click', lisneter);
      isDestroyed = true;
    },

    getClicks() {
      if (isDestroyed) {
        return 'Analytics is destroyed';
      }
      return counter;
    }
  }
}

window.analytics = createAnalytics();