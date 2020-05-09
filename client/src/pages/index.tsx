import React from 'react';
import styles from './index.less';

import { connect } from 'dva';

const index = (props: any) => {
  const { user } = props;

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <h1 className={styles.title}>{user.isLogin}</h1>
    </div>
  );
};

export default connect(({ user }) => ({ user }))(index);
