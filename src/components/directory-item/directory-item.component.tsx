import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { DirectoryCategory } from '../directory/directory.component';
import { DirectoryItemBody, DirectoryItemContainer, BackgroundImage } from './directory-item.styles';

type DirectoryItemProps = {
  category: DirectoryCategory;
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigateBtn = useNavigate();
  const navigateHandler = () => {
    navigateBtn(route);
  }
  return (
    <DirectoryItemContainer onClick={navigateHandler}>
      <BackgroundImage
        imageUrl={imageUrl} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p >Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  )
}


export default DirectoryItem;