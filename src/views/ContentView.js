import View from './View.js';
import defaultImage from "../images/default-image.jpg";

export default class ContentView extends View {
    constructor(el) {
        super(el);
        this.render();
    }

    render() {
        this.el.innerHTML = `<img src="${defaultImage}" />`;
    }
}