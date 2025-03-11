import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeSidebar();
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Sidebar menu items
  const menuItems = [
    { path: '/dashboard', icon: 'bi bi-grid', label: 'Dashboard' },
    { path: '/products', icon: 'bi bi-box', label: 'Products' },
    { path: '/messages', icon: 'bi bi-chat', label: 'Messages' },
    { path: '/orders', icon: 'bi bi-cart', label: 'Orders' },
    { path: '/calendar', icon: 'bi bi-calendar', label: 'Calendar' },
    { path: '/activity', icon: 'bi bi-activity', label: 'Activity' },
    { path: '/stats', icon: 'bi bi-bar-chart', label: 'Stats' },
  ];

  return (
    <div>
      <button className="toggle-btn" id="toggleBtn" onClick={toggleSidebar} aria-expanded={isOpen}>
        ☰
      </button>

      {/* Sidebar Navigation */}
      <div ref={sidebarRef} className={`sidebar ${isOpen ? 'mobile-open' : ''}`} id="sidebar">
        <button className="close-btn" id="closeBtn" onClick={closeSidebar} aria-label="Close Sidebar">
          ✕
        </button>

        <div className="sidebar-header">
          <h2>AdminPanel</h2>
          <small>cardeals</small>
        </div>

        <nav className="nav-menu">
          {menuItems.map((item, index) => (
            <Link to={item.path} key={index} className="nav-item" onClick={closeSidebar}>
              <i className={item.icon}></i>
              <span className="nav-text">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      {/* <div className="content" id="content">
        <h1>Sidebar Navigation</h1>
        <p>This is a responsive sidebar navigation with React Router.</p>
      </div> */}

      {/* Bootstrap Icons */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
      />
    </div>
  );
};

export default Sidebar;
