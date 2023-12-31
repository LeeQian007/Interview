const DEFAULT_OPTIONS = {
  position: "top-right",
  autoClose: 2000,
  onClose: () => {},
  canClose: true,
  showProgress: true,
  pauseOnHover: true,
};

export default class Toast {
  #toastElem;
  #autoCloseTimeout;
  #autoClose;
  #progressInterval;
  #paused = false;

  constructor(options) {
    // ["position", "left"]
    // this["pos"] = left
    this.#toastElem = document.createElement("div");
    this.#toastElem.classList.add("toast");
    requestAnimationFrame(() => {
      this.#toastElem.classList.add("show");
    });
    this.update({ ...DEFAULT_OPTIONS, ...options });
  }

  set position(value) {
    const currentContainer = this.#toastElem.parentElement;

    const selector = `.toast-container[data-position="${value}"]`;
    const container =
      document.querySelector(selector) || createContainer(value);
    container.append(this.#toastElem);

    if (currentContainer == null || currentContainer.hasChildNodes()) return;
    currentContainer.remove();
  }

  set text(value) {
    this.#toastElem.textContent = value;
  }

  set autoClose(value) {
    this.#autoClose = value;
    if (value === false) return;
    if (this.#autoCloseTimeout != null) clearTimeout(this.#autoCloseTimeout);
    this.#autoCloseTimeout = setTimeout(() => {
      this.remove();
    }, value);
  }

  set canClose(value) {
    this.#toastElem.classList.toggle("can-close", value);
    if (value) {
      this.#toastElem.addEventListener("click", () => {
        this.remove();
      });
    } else {
      this.#toastElem.removeEventListener("click", () => {
        this.remove();
      });
    }
  }

  set showProgress(value) {
    this.#toastElem.classList.toggle("progress", value);
    this.#toastElem.style.setProperty("--progress", 1);

    let i = 1;
    // console.log(this.#autoClose);
    if (value) {
      this.#progressInterval = setInterval(() => {
        if (this.#paused) {
          return;
        }
        //   1 / (autoCLose / 10)
        this.#toastElem.style.setProperty(
          "--progress",
          1 - i * (10 / this.#autoClose)
        );
        i++;
      }, 10);
    }
  }

  set pauseOnHover(value) {
    if (value) {
      this.#toastElem.addEventListener("mouseover", () => {
        this.#paused = true;
      });
      this.#toastElem.addEventListener("mouseleave", () => {
        this.#paused = false;
      });
    }
  }

  remove() {
    clearInterval(this.#progressInterval);
    clearTimeout(this.#autoCloseTimeout);
    const container = this.#toastElem.parentElement;
    this.#toastElem.classList.remove("show");
    this.#toastElem.addEventListener("transitionend", () => {
      this.#toastElem.remove();
      if (container.hasChildNodes()) return;
      container.remove();
    });

    this.onClose();
  }

  update(value) {
    Object.entries(value).forEach(([key, value]) => {
      this[key] = value;
    });
  }
}

function createContainer(position) {
  const container = document.createElement("div");
  container.classList.add("toast-container");
  container.dataset.position = position;
  document.body.append(container);
  return container;
}
