import DirectoryItem from '../directory-item/directory-item.component';
import './directory.styles.scss';

const Directory = ({ categoriesdata }) => {
    return (
        <div className="directory-container">
            {categoriesdata.map((categories) => (
                <DirectoryItem category={categories} key={categories.id} />
            ))}
        </div>
    )
}

export default Directory;
