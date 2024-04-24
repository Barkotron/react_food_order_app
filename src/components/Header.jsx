import logo from '../assets/logo.jpg';
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} />
        <h1>React Food</h1>
      </div>
      <button className="button">Cart</button>
    </header>
  );
}
