import React, { useState } from 'react';

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
      <button type="submit">{editingCategory ? 'Update' : 'Add'} Category</button>
    </form>
  );
};

export default CategoryInput;