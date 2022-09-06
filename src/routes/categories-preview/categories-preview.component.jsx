import { Fragment, useContext } from "react";
import { useSelector } from 'react-redux'


import CategoryPreview from "../../components/category-preview/category-preview.component";
// import { CategoriesContext } from "../../contexts/categories.context";
import { selectCategoriesMap, selectIsCagegoriesIsLoading } from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";


const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsCagegoriesIsLoading)
  // console.log(categoriesMap);
  return (
    <Fragment>
      {
        isLoading ? <Spinner /> :
          (Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            {/* console.log(products); */ }
            return (
              <CategoryPreview key={title} title={title} products={products} />
            )
          })
          )
      }
    </Fragment>
  );
};

export default CategoriesPreview;