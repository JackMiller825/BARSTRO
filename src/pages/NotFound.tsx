import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap not-found">
        <p className="eyebrow">Signal lost</p>
        <h1>This page is out of range.</h1>
        <p>That address is not on the Barstronaut map.</p>
        <Link className="btn btn-primary" to="/">
          Home
        </Link>
      </div>
    </section>
  );
}
