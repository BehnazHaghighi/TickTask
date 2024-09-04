import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';

const CategoryInput = ({ onAddCategory, onEditCategory, editingCategory }) => {
  const [categoryName, setCategoryName] = useState(editingCategory ? editingCategory.name : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCategory) {
      onEditCategory({ ...editingCategory, name: categoryName });
    } else {
      onAddCategory({ id: Date.now(), name: categoryName });
    }
    setCategoryName('');
  };

  return (
    <form onSubmit={handleSubmit} className="category-input">
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Enter category name"
        required
      />
      <button 
        type="submit" 
        className={editingCategory ? 'edit-btn' : 'add-btn'} /* Toggle class - based on edit or add state */
      >
        <FontAwesomeIcon icon={editingCategory ? faEdit : faPlus} />
      </button>
    </form>
  );
};

export default CategoryInput;
