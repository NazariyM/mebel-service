import objectFitImages from 'object-fit-images';
import 'jquery-mask-plugin';
import './components/Sliders';
import './components/CTabs';
import './sections/Contact';
// import './Popups';

export class Common {
  constructor() {
    this.init();
  }
  init() {
    objectFitImages();
    this.maskInput();
  }
  maskInput() {
    const $input = $('.js-tel-input');
    $input.mask('+7 (000) 000-00-00');
  }
}

export default new Common();
