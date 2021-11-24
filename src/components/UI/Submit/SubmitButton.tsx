import React from 'react';
import './SubmitButton.scss';
import { RightCircleOutlined } from '@ant-design/icons';

interface SubmitButtonProps {
  mw?: string;
  label: string;
  classType: string;
  disabled?: boolean;
  onClick?: () => void;
}

const SubmitButton = ({
  mw,
  disabled,
  label,
  classType,
  ...props
}: SubmitButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className="btn-submit"
      {...props}
      style={{ maxWidth: mw }}
    >
      <div className="submit-content">{label}</div>
      <i>
        <RightCircleOutlined />
      </i>
    </button>
  );
};

export default SubmitButton;
