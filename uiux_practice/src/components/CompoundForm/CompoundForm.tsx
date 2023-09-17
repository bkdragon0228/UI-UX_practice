import React, { PropsWithChildren } from 'react';

import CompoundInput, { CompoundInputProps } from './CompoundInput';

interface CompoundFormProps {
  onSubmit: () => void;
}

const CompoundForm: React.FC<PropsWithChildren<CompoundFormProps>> & {
  Input: React.FC<CompoundInputProps>;
} = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

CompoundForm.Input = CompoundInput;

export default CompoundForm;
