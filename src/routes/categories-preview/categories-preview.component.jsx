import { Fragment, useContext } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    // console.log(categoriesMap);
    return (
        <div className="category-preview-container">
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                {/* console.log(products); */ }
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                )
            })}
        </div>
    );
};

export default CategoriesPreview;