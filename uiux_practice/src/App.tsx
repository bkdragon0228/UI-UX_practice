import React, { useState } from 'react';
import HamburgerButton from './components/hamburgerButton';
import AccordianMenu from './components/accordianMenu';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="App">
      {/* <HamburgerButton
        isOpen={isOpen}
        setIsOpen={(value: boolean) => setIsOpen(value)}
      /> */}

      <AccordianMenu />
    </div>
  );
}

export default App;
