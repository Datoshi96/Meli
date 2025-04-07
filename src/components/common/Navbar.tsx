import { useEffect, useState } from "react";
import "../../styles/Navbar.scss";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

import logo from "../../assets/img/mercadologo.png";
export function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim()) {
      navigate(`/items?search=${search}`);
    } else {
      console.log("NO MI CIELA");
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    if (search === "") {
      navigate(`/`);
    }
  }, [search]);

  return (
    <div>
      <header className="search-header">
        <div className="search-bar">
          <img src={logo} alt="Logo" className="logo" />
          <input
            type="text"
            placeholder="Nunca dejes de buscar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch} title="Buscar">
            <AiOutlineSearch size={"15px"} color="#BEBEBE" />
          </button>
        </div>
      </header>
    </div>
  );
}
