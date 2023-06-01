import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SideBar';

// Use o hook `useSidebar` em seus componentes filhos para acessar o estado `isOpen` e `setIsOpen`
const useSidebar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return { isOpen, setIsOpen };
};

export { useSidebar };