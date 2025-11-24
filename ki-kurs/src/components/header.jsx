import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="flex justify-center items-center text-5xl bg-linear-to-r from-indigo-500 to-indigo-950 border-b-2 border-border pb-4 pt-2 font-mono font-extrabold text-shadow-lg/60">
        <h1>KI Oppgave</h1>
      </div>
      <nav className="flex justify-around mx-auto max-w-3xl items-center font-mono border-2 border-t-0 border-border py-2 bg-button-bg">
        <Link className="hover:text-blue-400" to="/">
          Hjem
        </Link>
        <Link className="hover:text-blue-400" to="/pros">
          Pros med KI
        </Link>
        <Link className="hover:text-blue-400" to="/cons">
          Cons med KI
        </Link>
        <Link className="hover:text-blue-400" to="/society">
          KI i Samfunnet
        </Link>
        <Link className="hover:text-blue-400" to="/it-industry">
          KI i IT-Bransjen
        </Link>
      </nav>
    </header>
  );
}

export default Header;
