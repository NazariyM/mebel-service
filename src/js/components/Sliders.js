import 'slick-carousel';
import { svgIcon } from '../_helpers';

class Sliders {
  constructor() {
    this.$slider = $('.slider-default');
    this.$viewBlock = $('.view-block');
    this.$viewCatSld = $('.view-catalog__slider');

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
    if (this.$viewBlock.length) this.initViewBlock();
    if (this.$viewCatSld.length) this.initViewCatSld();
    if (this.$slider.length) this.initDefaultSld();
  }

  initViewBlock() {
    this.$viewBlock.each((i, el) => {
      const $viewImg = $(el).find('.view-block__img');
      const $viewNav = $(el).find('.view-block__nav');

      $viewImg.slick($.extend({}, this.defaultOptions, {
        asNavFor: $viewNav,
        infinite: false,
        arrows: false,
        swipe: false
      }));
      $viewNav.slick($.extend({}, this.defaultOptions, {
        asNavFor: $viewImg,
        slidesToShow: 6,
        focusOnSelect: true,
        arrows: false,
        infinite: false,
        swipe: false
      }));
    });
  }
  initViewCatSld() {
    this.$viewCatSld.slick($.extend({}, this.defaultOptions, {
      infinite: false
    }));
  }
  initDefaultSld() {
    this.$slider.slick($.extend({}, this.defaultOptions));
  }
}

export default new Sliders();
