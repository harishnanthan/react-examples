import './RightModuleWithScroll.scss';

const RightModuleWithScroll = (props) => {
  const {
    width,
    items,
    labelRef,
    scrollHandler
  } = props;

  return (
    <div
      className="right_module_with_scroll"
      style={{ width: `80%`, height: `100vh`, }}
      onScroll={() => scrollHandler()}
    >
      {items.map((item, idx) => <div
        className='right_module_with_scroll__content'
        ref={(el) => (labelRef.current[idx] = el)}
        id={item?.label}
        key={idx}>{item?.children}</div>)}
    </div>
  );
}

export default RightModuleWithScroll;