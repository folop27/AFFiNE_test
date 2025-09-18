import { IconButton } from '@affine/component/ui/button';
import { CloseIcon } from '@blocksuite/icons/rc';

import * as styles from './index.css';

type LocalDemoTipsProps = {
  onClose: () => void;
};

export const LocalDemoTips = ({ onClose }: LocalDemoTipsProps) => {
  return (
    <div className={styles.tipsContainer} data-testid="local-demo-tips">
      <div className={styles.tipsMessage}>You are using CeMM AFFiNE Cloud.</div>

      <div className={styles.tipsRightItem}>
        <IconButton
          onClick={onClose}
          size="20"
          data-testid="local-demo-tips-close-button"
        >
          <CloseIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default LocalDemoTips;
