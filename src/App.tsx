const features = [
  { title: "Feature one", body: "A short sentence describing the first thing your product does." },
  { title: "Feature two", body: "A short sentence describing the second thing your product does." },
  { title: "Feature three", body: "A short sentence describing the third thing your product does." },
];

export default function App() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container row">
          <span className="brand">Acme</span>
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero container">
          <h1 className="hero-title">A simple headline that explains what you do</h1>
          <p className="hero-copy">
            One or two sentences of supporting copy. Say who this is for and what problem it
            solves, then get out of the way.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">Get started</a>
            <a className="btn btn-outline" href="#features">Learn more</a>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container grid-3">
            {features.map((f) => (
              <div key={f.title}>
                <h2 className="feature-title">{f.title}</h2>
                <p className="muted">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="section">
          <div className="container">
            <h2 className="section-title">Pricing</h2>
            <p className="muted">
              Keep it to one or two plans. State the price, what is included, and how to buy —
              nothing else.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <p className="muted">
              Email <a href="mailto:hello@example.com">hello@example.com</a> or call (555) 0100 to
              talk to someone.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container row">
          <span>© {new Date().getFullYear()} Acme. All rights reserved.</span>
          <span className="nav">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
