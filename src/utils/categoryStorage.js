
const CATEGORY_STORAGE_KEY = 'taskCategories';

export function loadCategories() {
  const categories = localStorage.getItem(CATEGORY_STORAGE_KEY);
  return categories ? JSON.parse(categories) : [];
}

export function saveCategories(categories) {
  localStorage.setItem(CATEGORY_STORAGE_KEY, JSON.stringify(categories));
}

export function addNewCategory(categories, newCategory) {
  const updatedCategories = [...categories, newCategory];
  saveCategories(updatedCategories);
  return updatedCategories;
}

export function removeCategory(categories, categoryId) {
  const updatedCategories = categories.filter(category => category.id !== categoryId);
  saveCategories(updatedCategories);
  return updatedCategories;
}

export function updateCategory(categories, updatedCategory) {
  const updatedCategories = categories.map(category =>
    category.id === updatedCategory.id ? updatedCategory : category
  );
  saveCategories(updatedCategories);
  return updatedCategories;
}