export default class View {
    constructor(el) {
        if (!el) throw el;

        this.el = el;
        return this;
    }

    hide() {
        this.el.style.display = "none";
        return this;
    }

    show() {
        this.el.style.display = "";
        return this;
    }
}