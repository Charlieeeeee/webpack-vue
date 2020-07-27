class Flexible {
  constructor() {
    this.docEl = document.documentElement;
    this.dpr = window.devicePixelRatio || 1;

    this.setBodyFontSize();
    this.setRemUnit();
    this.bind();
    this.detect();
  }

  bind() {
    window.addEventListener('resize', this.setRemUnit);
    window.addEventListener('pageshow', (e) => {
      if (e.persisted) {
        this.setRemUnit();
      }
    });
  }

  setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = `${12 * this.dpr}px`;
    } else {
      document.addEventListener('DOMContentLoaded', this.setBodyFontSize);
    }
  }

  // set 1rem = viewWidth / 10
  setRemUnit() {
    var rem = document.documentElement.getBoundingClientRect().width / 10;
    document.documentElement.style.fontSize = rem + 'px';
  }

  detect() {
    // detect 0.5px supports
    if (this.dpr >= 2) {
      var fakeBody = document.createElement('body');
      var testElement = document.createElement('div');
      testElement.style.border = '.5px solid transparent';
      fakeBody.appendChild(testElement);
      this.docEl.appendChild(fakeBody);
      if (testElement.offsetHeight === 1) {
        this.docEl.classList.add('hairlines');
      }
      this.docEl.removeChild(fakeBody);
    }
  }
}

new Flexible();
