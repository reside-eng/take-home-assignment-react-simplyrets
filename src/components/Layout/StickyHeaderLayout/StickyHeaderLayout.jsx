import PageHeader from 'components/PageHeader';
import './StickyHeaderLayout.css';

const StickyHeaderLayout = ({ children, headerText }) => {
  return (
    <div className="StickyHeaderLayout">
      <PageHeader headerText={headerText} role="heading" aria-level="1" />
      <div className="StickyHeaderLayoutContents">{children}</div>
    </div>
  );
};

export default StickyHeaderLayout;
