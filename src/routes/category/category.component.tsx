import {
    // useContext, 
    useState, useEffect, Fragment
} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

// import { CategoriesContext } from '../../contexts/categories.context';

import { selectCategoriesMap, selectIsCagegoriesIsLoading } from '../../store/categories/category.selector';

import { CategoryContainer, CategoryTitle } from './category.styles'

type CategoryRouteParams = {
    category: string;
}


const Category = () => {
    const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
    // const { categoriesMap } = useContext(CategoriesContext);
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsCagegoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category]);
        // console.log(products);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                /* Check if the page is loading */
                isLoading ? <Spinner /> : <CategoryContainer>
                    {/* safe gard make sure products have value */}
                    {products && products.map((product) =>
                        (<ProductCard product={product} key={product.id} />))}
                </CategoryContainer>
            }



        </Fragment>
    )
}

export default Category;



