import ContentView from '../views/ContentView.js';

export default class MainController {
    constructor() {
        const contentViewEl = document.querySelector('.content');
        this.contentView = new ContentView(contentViewEl);
    }
}