import React, { useState } from 'react';
import HamburgerButton from './components/hamburgerButton';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="App">
      <HamburgerButton
        isOpen={isOpen}
        setIsOpen={(value: boolean) => setIsOpen(value)}
      />
    </div>
  );
}

export default App;
