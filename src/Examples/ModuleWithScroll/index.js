import ModuleWithScroll from "./ModuleWithScroll";
import {
  MODULES,
  POSITION
} from './ModuleWIthScroll.constants';

const ScrollModule = () => {
  return (
    <ModuleWithScroll
      position={POSITION}
      modules={MODULES}
      width={[20, 80]}
      height={[100]}
      defaultActiveKey={'Tab 1'}
    />
  );
}

export default ScrollModule;