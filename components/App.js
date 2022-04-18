
const { h, render } = preact;
const { useReducer } = preactHooks;
const { Router } = preactRouter;

function App() {
  return html`
    <div>
      <${Header} url=${this.state.url} />
      <${Router} onChange=${e => this.setState(e)}>
        <${MainPage} path="/" />
        <${OtherPage} path="/other" />
      <//>
    </div>
  `;
}

const Header = ({ url }) => html`
  <header style="max-width: 400px">
    <nav>
      <a href="/">Toggle</a>
      <a href="/other">Other Page</a>
    </nav>
    <section>URL:<input readonly value=${url} /></section>
  </header>
`;

const TOGGLE = v => !v;
const MainPage = () => {
  const [on, toggle] = useReducer(TOGGLE, false);

  return html`
    <section>
      <h1>Toggle</h1>
      <strong>Value: ${on || "un"}checked</strong>
      <br />
      <label>
        <input type="checkbox" checked=${on} onClick=${toggle} />
        Check Me
      </label>
      <br />
      <p>
        Value toggles after initial pageload, but after nagivation it's
        broken...
      </p>
    </section>
  `;
};

const OtherPage = () =>
  html`
    <section>
      <h1>Other</h1>
      <p>
        If you navigate to the Toggle Page, it will break its page's state
      </p>
    </section>
  `;

export default App;