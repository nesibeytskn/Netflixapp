import {createContext, useState} from 'react';

const DataContext = createContext();

const DataProvider = ({children}) => {
  const [catIndex, setCatIndex] = useState('Çok Yakında');
  return (
    <DataContext.Provider value={{catIndex, setCatIndex}}>
      {children}
    </DataContext.Provider>
  );
};

export {DataContext, DataProvider};
