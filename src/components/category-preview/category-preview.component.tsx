import { FC } from 'react';
import { CategoryItem } from '../../store/categories/category.type';
import ProductCard from '../product-card/product-card.component'

import { CategoryPreviewContainer, CategoriesPreviewTitle, CategoriesPreviewPreview } from './category-preview.styles'

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoriesPreviewTitle to={title}>{title.toUpperCase()}
        </CategoriesPreviewTitle>
      </h2>
      <CategoriesPreviewPreview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoriesPreviewPreview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview