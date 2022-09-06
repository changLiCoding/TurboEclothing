import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

// import { fetchCategoriesAsync } from '../../store/categories/category.action';  FOR REDUX_THUNK
import { fetchCategoriesStart } from '../../store/categories/category.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const getCategoriesMap = async () => {
    // const categoriesArray = await getCategoriesAndDocuments('categories');
    // console.log(categoriesArray);
    // dispatch(fetchCategoriesAsync()); FOR REDUX_THUNK
    // }
    // getCategoriesMap();
    dispatch(fetchCategoriesStart());
  }, [])

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;