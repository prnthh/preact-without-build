const { h, render } = preact;
window.html = htm.bind(h);

import App from './components/App.js';

render(html`<${App} />`, document.body);