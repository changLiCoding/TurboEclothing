import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';

import { CategoriesContext } from '../../contexts/categories.context';

import './category.styles.scss'



const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category]);
        // console.log(products);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2 className='category-title '>{category.toUpperCase()}</h2>

            <div className='category-container'>
                {/* safe gard make sure products have value */}
                {products && products.map((product) =>
                    (<ProductCard product={product} key={product.id} />))}
            </div>
        </Fragment>
    )
}

export default Category;