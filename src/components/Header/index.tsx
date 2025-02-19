import { HeaderConteiner } from "./styles";
import logoIgnite from "../../assets/logo-ignite.svg";
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderConteiner>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="/" title="time">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderConteiner>
  );
}
