import 'slick-carousel';
import { svgIcon } from '../_helpers';

class Sliders {
  constructor() {
    this.$screenSlider = $('.screen__slider');
    this.$prodSlider = $('.prod-slider');
    // this.$productView = $('.product__view');

    const iconLeft = svgIcon('sld-arr-l');
    const iconRight = svgIcon('sld-arr-r');

    this.defaultOptions = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      speed: 800,
      useTransform: true,
      adaptiveHeight: true,
      accessibility: false,
      swipe: true,
      arrows: true,
      prevArrow: `<button type="button" class="slider-btn slider-btn_prev">${iconLeft}</button>`,
      nextArrow: `<button type="button" class="slider-btn slider-btn_next">${iconRight}</button>`,
      rows: 0
    };

    this.init();
  }

  init() {
    if (this.$screenSlider.length) this.initScreenSlider();
    if (this.$prodSlider.length) this.initProdSlider();
    // if (this.$productView.length) this.initProdView();
  }

  initScreenSlider() {
    this.$screenSlider.slick($.extend({}, this.defaultOptions, {
      dotsClass: 'screen__slider-dots slider-dots',
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000
    }));
  }

  initProdSlider() {
    this.$prodSlider.slick($.extend({}, this.defaultOptions));
  }

  // initProdView() {
  //   this.$productView.each((i, el) => {
  //     const $viewImg = $(el).find('.product__view-img');
  //     const $viewThumbs = $(el).find('.product__view-thumbs');
  //
  //     $viewImg.slick($.extend({}, this.defaultOptions, {
  //       asNavFor: $viewThumbs,
  //       infinite: false,
  //       speed: 400
  //     }));
  //     $viewThumbs.slick($.extend({}, this.defaultOptions, {
  //       asNavFor: $viewImg,
  //       slidesToShow: 4,
  //       focusOnSelect: true,
  //       infinite: false
  //     }));
  //   });
  // }
}

export default new Sliders();
