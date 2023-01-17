import { useRef, useState } from 'react';

import LeftModuleWithScroll from './helpers/LeftModuleWithScroll/LeftModuleWithScroll.js';
import RightModuleWithScroll from './helpers/RightModuleWithScroll/RightModuleWithScroll.js'

import { getAlignment, getLabels } from './ModuleWithScroll.helper';

import './ModuleWithScroll.scss';

const ModuleWithScroll = (props) => {
  // props
  const {
    width,
    height,
    position,
    modules,
    defaultActiveKey,
  } = props;

  // state
  const [activeLabel, setActiveLabel] = useState(defaultActiveKey)

  const [fullWidth, fullHeight] = getAlignment(position, width, height);

  // ref
  const labelRef = useRef([]);

  // this function returns true if the current div is visible on the view port;
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  const scrollHandler = () => {
    let activeKey = defaultActiveKey;
    const refArray = labelRef.current;
    for (let i = 0; i < refArray.length; i++) {
      if (isInViewport(refArray[i])) activeKey = i;
    }
    setActiveLabel(modules[activeKey]?.label);
  }

  return (
    <div
      className='module_with_scroll'
      style={{ width: `${fullWidth}vw`, height: `${fullHeight}vh`, }}
    >
      <LeftModuleWithScroll
        position={position}
        width={width}
        items={getLabels(modules)}
        activeLabel={activeLabel}
        setActiveLabel={setActiveLabel}
      />
      <RightModuleWithScroll
        width={width}
        position={position}
        items={modules}
        labelRef={labelRef}
        scrollHandler={scrollHandler}
      />
    </div>
  );
}

export default ModuleWithScroll;

