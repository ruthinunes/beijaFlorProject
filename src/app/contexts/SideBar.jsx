"use client"
import React from 'react';

// Crie um novo contexto para o Sidebar
export const SidebarContext = React.createContext();

// Crie um componente de provedor que fornece o estado `isOpen` para seus componentes filhos
export const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
  
    return (
      <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
        {children}
      </SidebarContext.Provider>
    );
  };