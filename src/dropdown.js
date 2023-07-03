import React, { useState } from 'react';

const Dropdown = ({ items }) => {
  // State variables to manage dropdown visibility and selected item
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Toggle dropdown visibility
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Handle item click and update selected item and close dropdown
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      {/* Dropdown toggle button */}
      <button className="dropdown-toggle" onClick={handleToggle}>
        {selectedItem || 'Select'}
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <ul className="dropdown-menu">
          {/* Render dropdown menu items */}
          {items.map((item) => (
            <li key={item} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;