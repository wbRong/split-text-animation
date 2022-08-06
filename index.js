function SplitText(options) {
  this.options = {
    dom: document.querySelector(options.container),
    speed: options.speed,
    autoplay: options.autoplay,
  };

  this.char = 0;
  this.timer = null;
  this.str = this.options.dom.textContent;
  this.splitText = this.str.split("");

  if (this.options.autoplay == undefined || this.options.autoplay) this.render();
}

SplitText.prototype = {
  constructor: SplitText,
  render() {
    this.options.dom.textContent = "";

    for (let i = 0; i < this.splitText.length; i++) {
      this.options.dom.innerHTML += `<span>${this.splitText[i]}</span>`;
    }

    this.timer = setInterval(this.addStyle.bind(this), this.options["speed"]);
  },
  addStyle() {
    const span = this.options.dom.querySelectorAll("span")[this.char];
    span.classList.add("current");
    this.char++;

    if (this.char === this.splitText.length) {
      clearInterval(this.timer);
      this.timer = null;
      return;
    }
  }
};

export default SplitText;
