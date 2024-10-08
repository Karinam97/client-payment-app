import { ChangeEvent } from 'react';
import { Client } from '../../../types';

// Function to get form fields for the Client form
export const getClientFormFields = (
  formData: Omit<Client, 'id'>,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
) => [
  {
    name: 'name',
    label: 'Name',
    value: formData.name,
    onChange: handleChange,
    required: true,
  },
  {
    name: 'address',
    label: 'Address',
    value: formData.address,
    onChange: handleChange,
    required: true,
  },
  {
    name: 'phoneNumber',
    label: 'Phone Number',
    value: formData.phoneNumber,
    onChange: handleChange,
    required: true,
    validation: {
      message: 'Phone number must be 11 digits',
      validationFormat: '^\\d{11}$',
    },
  },
  {
    name: 'bankAccountNumber',
    label: 'Bank Account Number (Optional)',
    value: formData.bankAccountNumber || '',
    onChange: handleChange,
  },
];
