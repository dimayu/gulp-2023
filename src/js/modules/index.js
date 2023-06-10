import { firstScreen, header } from './../helpers/elementsNodeList';

// Функция для фиксированной шапки при скролле ===========================================================
function headerFixed() {
  const headerStickyObserver = new IntersectionObserver(([entry]) => {
    header.classList.toggle('sticky', !entry.isIntersecting);
  });

  if (firstScreen) {
    headerStickyObserver.observe(firstScreen);
  }
}

export {
  headerFixed,
};