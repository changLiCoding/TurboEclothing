import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

const Directory = ({ categoriesdata }) => {
    return (
        <DirectoryContainer>
            {categoriesdata.map((categories) => (
                <DirectoryItem category={categories} key={categories.id} />
            ))}
        </DirectoryContainer>
    )
}

export default Directory;
