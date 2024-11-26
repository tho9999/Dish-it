import { Link } from "react-router-dom";

function RecipeSpecificSearchNavbar() {
  return (
    <header className="navigation-bar">
        <Link to="/">
        <img
            src="/images/logoNavBar.png"
            class="image"
            alt="logo
            of Dish-It"
        /></Link>
        <nav className="navbar">
            <Link to="/">GO BACK</Link>
        </nav>
    </header>
  )
}

export default RecipeSpecificSearchNavbar;
