import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const CategoryList = ({ categories, onDeleteCategory, onEditCategory }) => {
  return (
    <div className="category-list">
      <h3>Categories</h3>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            {category.name}
            <button onClick={() => onEditCategory(category)}>
              <FontAwesomeIcon icon={faEdit} className="edit-icon" /> 
            </button>
            <button onClick={() => onDeleteCategory(category.id)}>
              <FontAwesomeIcon icon={faTrash} className="delete-icon" /> 
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
