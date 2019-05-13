class Chat {
  constructor(form, button, close) {
    this.button = button;
    this.close = close;
    this.form = form;
    this.show = false;
    this.ascent = 'chat__ascent';
    this.damping = 'chat__damping';

    this.init();
  }

  // private:
  onEndAnimation(e) {
    if (e.currentTarget.classList.contains(this.damping)) {
      e.currentTarget.style.display = 'none';
    }
  }

  // private:
  clearClasses(arr) {
    return arr.forEach((item) => {
      item.removeAttribute('style');
      if (item.classList.contains(this.damping)) item.classList.remove(this.damping);
      if (item.classList.contains(this.ascent)) item.classList.remove(this.ascent);
    });
  }

  // private:
  onClickToggle(e) {
    e.preventDefault();

    const form = document.querySelector(this.form);
    const button = document.querySelector(this.button);

    this.clearClasses([button, form]);

    if (this.show) {
      button.classList.add(this.ascent);
      form.classList.add(this.damping);
    } else {
      button.classList.add(this.damping);
      form.classList.add(this.ascent);
    }

    this.show = !this.show;
  }

  // public:
  init() {
    const form = document.querySelector(this.form);
    const button = document.querySelector(this.button);
    const close = document.querySelector(this.close);

    button.addEventListener('click', e => this.onClickToggle(e));
    close.addEventListener('click', e => this.onClickToggle(e));

    button.addEventListener('animationend', e => this.onEndAnimation(e));
    form.addEventListener('animationend', e => this.onEndAnimation(e));
  }
}

export default (form, button, close) => new Chat(form, button, close);
