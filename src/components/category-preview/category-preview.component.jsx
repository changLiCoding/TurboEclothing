import ProductCard from '../product-card/product-card.component'

import { CategoryPreviewContainer, CategoriesPreviewTitle, CategoriesPreviewPreview } from './category-preview.styles.jsx'


const CategoryPreview = ({ title, products }) => {
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