import { getFlexDirection } from './LeftModuleWithScroll.helper';
import './LeftModuleWithScroll.scss';

const LeftModuleWithScroll = (props) => {
  const {
    width,
    items,
    position,
    activeLabel
  } = props;

  const labelClickHandler = (item) => {
    const element = document.getElementById(item);
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className='left_module_with_scroll'
      style={{
        width: `20%`,
        flexDirection: getFlexDirection(position),
      }}
    >
      {items?.map((item, idx) => <p
        key={idx}
        className='left_module_with_scroll_item'
        onClick={() => labelClickHandler(item)}
        style={{
          backgroundColor: `${activeLabel === item ? '#2d55ff' : ''}`,
          color: `${activeLabel === item ? '#fff' : ''}`
        }}
      >{item}</p>)}

    </div>
  );
}

export default LeftModuleWithScroll;