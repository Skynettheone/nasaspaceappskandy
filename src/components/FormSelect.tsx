"use client";

import * as Select from "@radix-ui/react-select";
import { CaretDownIcon } from "@phosphor-icons/react/dist/csr/CaretDown";
import { CaretUpIcon } from "@phosphor-icons/react/dist/csr/CaretUp";
import { CheckIcon } from "@phosphor-icons/react/dist/csr/Check";

type FormSelectProps = {
  id: string;
  name: string;
  value: string;
  options: readonly string[];
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  describedBy?: string;
  onValueChange: (value: string) => void;
};

export function FormSelect({ id, name, value, options, required, disabled, invalid, describedBy, onValueChange }: FormSelectProps) {
  return (
    <Select.Root name={name} value={value} onValueChange={(next) => onValueChange(next === "__none" ? "" : next)} required={required} disabled={disabled}>
      <Select.Trigger id={id} className="form-select-trigger" aria-invalid={invalid} aria-describedby={describedBy}>
        <Select.Value placeholder="Select a province" />
        <Select.Icon className="form-select-icon"><CaretDownIcon size={16} aria-hidden="true" /></Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="form-select-menu" position="popper" sideOffset={6} collisionPadding={16}>
          <Select.ScrollUpButton className="form-select-scroll"><CaretUpIcon size={16} /></Select.ScrollUpButton>
          <Select.Viewport className="form-select-options">
            {options.includes("") && <Select.Item className="form-select-option" value="__none"><Select.ItemText>Not specified</Select.ItemText></Select.Item>}
            {options.filter(Boolean).map((option) => (
              <Select.Item className="form-select-option" key={option} value={option}>
                <Select.ItemText>{option}</Select.ItemText>
                <Select.ItemIndicator className="form-select-check"><CheckIcon size={16} aria-hidden="true" /></Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="form-select-scroll"><CaretDownIcon size={16} /></Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
