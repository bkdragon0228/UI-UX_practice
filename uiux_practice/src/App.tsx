import React, { useState } from 'react';

import { useForm, FormProvider } from 'react-hook-form';

import { list } from '../src/components/form/fixture';

import { LoginFormProps } from '../src/components/form/types';

import HamburgerButton from './components/hamburgerButton';
import AccordianMenu from './components/accordianMenu';
import DropDownMenu from './components/dropdownMenu';
import Form from './components/form';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const methods = useForm<LoginFormProps>({ criteriaMode: 'all' });

  const onSubmit = (data: LoginFormProps) => {
    console.log(data);
  };

  return (
    <div className="App">
      <FormProvider {...methods}>
        {/* <HamburgerButton
        isOpen={isOpen}
        setIsOpen={(value: boolean) => setIsOpen(value)}
      /> */}

        {/* <AccordianMenu /> */}
        {/* <DropDownMenu title="number" /> */}
        <Form<LoginFormProps> title="Login" onSubmit={onSubmit} list={list} />
      </FormProvider>
    </div>
  );
}

export default App;
