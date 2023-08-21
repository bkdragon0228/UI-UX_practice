import React, { useState } from 'react';
import HamburgerButton from './components/hamburgerButton';
import AccordianMenu from './components/accordianMenu';
import DropDownMenu from './components/dropdownMenu';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="App">
      {/* <HamburgerButton
        isOpen={isOpen}
        setIsOpen={(value: boolean) => setIsOpen(value)}
      /> */}

      {/* <AccordianMenu /> */}
      <DropDownMenu title="number" />
    </div>
  );
}

export default App;
