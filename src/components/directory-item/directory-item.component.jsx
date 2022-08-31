import { DirectoryItemBody, DirectoryItemContainer, BackgroundImage } from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
  const { id, imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage
        imageUrl={imageUrl} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem;