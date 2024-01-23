import './Loading.css';

const Loading = ({ children }) => {
  return (
    <div className="LoadingContainer">
      <>{children}</>
    </div>
  );
};

export default Loading;
