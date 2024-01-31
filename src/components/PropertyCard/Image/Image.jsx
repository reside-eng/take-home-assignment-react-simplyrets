import './Image.css';

const Image = ({ url }) => {
  return (
    <div className="PropertyImageContainer">
      <img src={url} alt="For Property" />
    </div>
  );
};

export default Image;
