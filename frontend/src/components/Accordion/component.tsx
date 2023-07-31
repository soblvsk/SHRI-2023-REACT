'use client';

import React, { useCallback, useContext, useState } from 'react';

import styles from './styles.module.scss';
import classnames from 'classnames';

const MenuContext = React.createContext<{
  activeGroup: number | null;
  switchGroup: (id: number) => void;
}>({ activeGroup: null, switchGroup: () => {} });

Accordion.Item = function MenuItem({
  renderTitle,
  renderContent,
  itemId,
}: {
  renderTitle: () => React.JSX.Element;
  renderContent: () => React.JSX.Element;
  itemId: number;
}) {
  const { activeGroup, switchGroup } = useContext(MenuContext);
  const isActive = activeGroup === itemId;

  return (
    <>
      <Group
        renderMainContent={() => (
          <button className={styles.accordion} onClick={() => switchGroup(itemId)}>
            {renderTitle()}
            <svg
              className={classnames(styles.accordion__icon, isActive && styles.accordion__iconOpen)}
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
            >
              <path d='M7.5 18.958h5c4.525 0 6.458-1.933 6.458-6.458v-5c0-4.525-1.933-6.458-6.458-6.458h-5c-4.525 0-6.458 1.933-6.458 6.458v5c0 4.525 1.933 6.458 6.458 6.458ZM2.292 7.5c0-3.842 1.366-5.208 5.208-5.208h5c3.842 0 5.208 1.366 5.208 5.208v5c0 3.842-1.366 5.208-5.208 5.208h-5c-3.842 0-5.208-1.366-5.208-5.208v-5Zm7.266 4.742a.618.618 0 0 0 .442.183.618.618 0 0 0 .442-.183L13.383 9.3a.629.629 0 0 0 0-.883.629.629 0 0 0-.883 0l-2.5 2.5-2.5-2.5a.629.629 0 0 0-.883 0 .629.629 0 0 0 0 .883l2.941 2.942Z' />
            </svg>
          </button>
        )}
        renderToggleContent={() => <div className='f'>{renderContent()}</div>}
        isActive={isActive}
      />
    </>
  );
};

function Group({
  renderMainContent,
  renderToggleContent,
  isActive,
}: {
  renderMainContent: () => JSX.Element;
  renderToggleContent: () => JSX.Element;
  isActive: boolean;
}) {
  return (
    <>
      {renderMainContent()}
      {isActive && renderToggleContent()}
    </>
  );
}

export function Accordion({ children }: { children: React.ReactNode }) {
  const [activeGroup, setActiveGroup] = useState<number | null>(null);

  const switchGroup = useCallback((id: number) => {
    setActiveGroup((activeId: number | null) => (activeId === id ? null : id));
  }, []);

  return (
    <MenuContext.Provider
      value={{
        activeGroup,
        switchGroup,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
