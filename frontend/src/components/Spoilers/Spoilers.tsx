'use client';

import React, { FunctionComponent, useCallback, useContext, useState } from 'react';

import styles from './styles.module.css';
import classnames from 'classnames';

interface MenuContextType {
  activeGroup: string | undefined;
  switchGroup: (title: string) => void;
}

const MenuContext = React.createContext<MenuContextType>({ activeGroup: undefined, switchGroup: () => {} });

interface MenuAccordionProps {
  children: React.ReactNode;
}

const MenuAccordion: FunctionComponent<MenuAccordionProps> & {
  Group: typeof MenuGroup;
  Item: typeof MenuItem;
} = ({ children }) => {
  const [activeGroup, setActiveGroup] = useState<string | undefined>();

  const switchGroup = useCallback((title: string) => {
    setActiveGroup((activeTitle) => (activeTitle === title ? undefined : title));
  }, []);

  return <MenuContext.Provider value={{ activeGroup, switchGroup }}>{children}</MenuContext.Provider>;
};

const MenuGroup: FunctionComponent<{
  children: React.ReactNode;
  title: string;
}> = ({ children, title }) => {
  const { activeGroup, switchGroup } = useContext(MenuContext);

  return (
    <div className={styles.spoiler}>
      <div className={classnames('font-semibold', styles['spoiler__title'])} onClick={() => switchGroup(title)}>
        {title}
        <svg
          className={classnames(styles['spoiler__icon'], activeGroup === title ? styles['spoiler__icon-true'] : '')}
          width='32'
          height='32'
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12.0001 30.3334H20.0001C27.2401 30.3334 30.3334 27.2401 30.3334 20.0001V12.0001C30.3334 4.76008 27.2401 1.66675 20.0001 1.66675H12.0001C4.76008 1.66675 1.66675 4.76008 1.66675 12.0001V20.0001C1.66675 27.2401 4.76008 30.3334 12.0001 30.3334ZM3.66675 12.0001C3.66675 5.85341 5.85341 3.66675 12.0001 3.66675H20.0001C26.1467 3.66675 28.3334 5.85341 28.3334 12.0001V20.0001C28.3334 26.1467 26.1467 28.3334 20.0001 28.3334H12.0001C5.85341 28.3334 3.66675 26.1467 3.66675 20.0001V12.0001ZM15.2934 19.5868C15.4934 19.7868 15.7467 19.8801 16.0001 19.8801C16.2534 19.8801 16.5067 19.7868 16.7067 19.5868L21.4134 14.8801C21.8001 14.4934 21.8001 13.8534 21.4134 13.4668C21.0267 13.0801 20.3867 13.0801 20.0001 13.4668L16.0001 17.4668L12.0001 13.4668C11.6134 13.0801 10.9734 13.0801 10.5867 13.4668C10.2001 13.8534 10.2001 14.4934 10.5867 14.8801L15.2934 19.5868Z'
            fill='#333333'
          />
        </svg>
      </div>
      {activeGroup === title && <div>{children}</div>}
    </div>
  );
};

MenuAccordion.Group = MenuGroup;

const MenuItem: FunctionComponent<{
  children?: React.ReactNode;
  descr: string;
}> = ({ descr }) => {
  return <div className={styles['spoiler__descr']}>{descr}</div>;
};

MenuAccordion.Item = MenuItem;

interface Props {
  items: { title: string; descr: string }[];
}

const Spoilers: FunctionComponent<Props> = ({ items }) => {
  return (
    <MenuAccordion>
      {items.map((item, index) => (
        <MenuAccordion.Group key={index} title={item.title}>
          <MenuAccordion.Item descr={item.descr} />
        </MenuAccordion.Group>
      ))}
    </MenuAccordion>
  );
};

export default Spoilers;
