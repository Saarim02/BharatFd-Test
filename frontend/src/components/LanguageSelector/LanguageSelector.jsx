import React from 'react';
import { Select } from 'antd';

const LANGUAGES = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'Hindi' },
  { value: 'bn', label: 'Bengali' },
  { value: 'ur', label: 'Urdu' },
  { value: 'sa', label: 'Sanskrit' }
];

const LanguageSelector = ({ value, onChange, style }) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      style={style}
      options={LANGUAGES}
    />
  );
};

export default LanguageSelector; 