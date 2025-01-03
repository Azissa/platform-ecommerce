import React from 'react';

interface TextInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string; 
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder = '', type = 'text' }) => {
  return (
    <div className="">
      <label className="input input-bordered flex items-center">      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="grow"
      /></label>
    </div>
  );
};

export default TextInput;
