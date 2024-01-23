import './PageHeader.css';

const PageHeader = ({ headerText }) => {
  return (
    <div className="PageHeaderContainer">
      <div
        className="HeadingText"
        aria-label="Property Listings Page"
        data-testid="page-header-text"
      >
        {headerText}
      </div>
    </div>
  );
};

export default PageHeader;
