import React from 'react';
import Header from '../common/Header'
import List from '../common/List'
import styles from '../styles.module.css'

import { ItemType } from '../ApiContext'

interface PickViewProps {
  title: string,
  items: ItemType[]
  onItemClick?: (name: string, index: number, item: ItemType) => void
  name?: string
  searchable?: boolean,
  paymentMethod?: boolean,
  selectCrypto?: boolean,
}

const PickView: React.FC<PickViewProps> = (props) => {
  const { title, items, name = '', searchable = false, paymentMethod = false, selectCrypto = false, } = props
  const { onItemClick = () => null } = props
  return (
    <main className={styles.view}>
      <Header backButton title={title} />
      <List onItemClick={(index, item) => onItemClick(name, index, item)} items={items} searchable={searchable} paymentMethod={paymentMethod} selectCrypto={selectCrypto} />
    </main>
  );
};

export default PickView;
