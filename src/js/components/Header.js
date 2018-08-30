import {
  css,
  Resp
} from '../_helpers';

class Header {
  constructor() {
    this.body = document.querySelector('body');
    this.header = document.querySelector('.header');
    this.nav = this.header.querySelector('.header__nav');
    this.navBtn = this.header.querySelector('.header__nav-btn');

    this.init();
  }

  init() {
    if (!Resp.isDesk) {
      this.toggleNav();
      this.onResize();
    }
  }

  toggleNav() {
    this.navBtn.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle(css.active);
      this.body.classList.toggle(css.locked);
      this.nav.classList.toggle(css.active);
    });
  }

  onResize() {
    window.addEventListener('reize', () => {
      console.log('res');
      this.nav.classList.remove(css.active);
      this.navBtn.classList.remove(css.active);
      this.body.classList.remove(css.locked);
    });
  }
}

export const HeaderAPI = new Header();
