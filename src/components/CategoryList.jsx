import React from 'react';

const CategoryList = ({ categories, onDeleteCategory, onEditCategory }) => {
  return (
    <div className="category-list">
      <h3>Categories</h3>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            {category.name}
            <button onClick={() => onEditCategory(category)}>Edit</button>
            <button onClick={() => onDeleteCategory(category.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;