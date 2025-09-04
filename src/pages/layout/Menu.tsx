import { useState } from "react";
import { FaAlignJustify, FaTimes, FaUser } from "react-icons/fa";
import { FaChartSimple, FaRightToBracket, FaUserGroup } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="layout">
        <div className="topbar">
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <FaAlignJustify />
          </button>
          <h1 className="title">EGC Admin</h1>
          {/* <h1 className="title">{JSON.stringify(isOpen)}</h1> */}
        </div>

        <aside className={`sidebar ${isOpen ? "open" : ""}`}>
          <div className="sidebar-header">
            <img src="/egc.jpeg" alt="Logo" className="logo" />
            <h2>EGC Admin</h2>
          </div>

          <div className="sidebar-content">
            <hr className="separator" />
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <FaTimes /> Ocultar menú
            </button>
            <hr className="separator" />

            <p>Sistema de Administración</p>

            <div className="menu-continer-instructor">
              <FaUser className="icon" />
              <div className="menu-instructor-info">
                <span>Erick Osoy</span>
                <p>Administrador</p>
              </div>
            </div>

            <nav className="menu-items">
              <Link
                to="/dashboard"
                className="menu-link"
                onClick={() => setIsOpen(false)}
              >
                <FaChartSimple className="icon" />
                <span className="text">Dashboard</span>
              </Link>
              <Link
                to="/usuarios"
                className="menu-link"
                onClick={() => setIsOpen(false)}
              >
                <FaUserGroup className="icon" />
                <span className="text">Usuarios</span>
              </Link>
              {/* aquí puedes agregar más opciones sin que empuje el resto */}
            </nav>
          </div>

          {/* Logout fijo abajo */}
          <div className="logout">
            <button type="button" className="logout-btn">
              <FaRightToBracket className="icon" />
              <span className="text">Cerrar sesión</span>
            </button>
          </div>
        </aside>

        <main className="content">
          <Outlet />
        </main>
      </div>
    </>
  );
};
