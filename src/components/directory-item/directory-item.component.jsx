import { useNavigate } from 'react-router-dom';
import { DirectoryItemBody, DirectoryItemContainer, BackgroundImage } from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
  const { id, imageUrl, title, route } = category;
  const navigateBtn = useNavigate();
  const navigateHandler = () => {
    navigateBtn(route);
  }
  return (
    <DirectoryItemContainer>
      <BackgroundImage
        imageUrl={imageUrl} />
      <DirectoryItemBody onClick={navigateHandler}>
        <h2>{title}</h2>
        <p to={route}>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem;