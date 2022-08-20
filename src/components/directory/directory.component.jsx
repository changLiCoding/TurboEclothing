import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';


const Directory = ({ categoriesdata }) => {
    return (
        <div className="directory-container">
            {categoriesdata.map((categories) => (
                <CategoryItem category={categories} key={categories.id} />
            ))}


        </div>
    )
}

export default Directory;
