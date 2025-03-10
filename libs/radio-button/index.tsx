import React from 'react';

type RadioButtonProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

export default function RadioButton({
  label,
  checked,
  onChange,
}: RadioButtonProps) {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="radio"
        className="form-radio text-khaki h-5 w-5 border-khaki focus:ring-khaki"
        checked={checked}
        onChange={onChange}
      />
      <span className="ml-2 font-medium">{label}</span>
    </label>
  );
}
