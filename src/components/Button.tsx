import React from "react";
import { Button, styled } from "@mui/material";
import * as styles from "../styles";

// TODO: add support for button variants extending a base button style to reduce code duplicationn

interface ButtonProps {
  name?: string;
  label: string;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
}

const Primary = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  borderRadius: "6px",
  backgroundColor: styles.primaryAccentHex,
  "&:hover": {
    backgroundColor: styles.primaryAccentHoverHex,
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: styles.primaryAccentHex,
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export const PrimaryButton: React.FC<ButtonProps> = ({
  name,
  label,
  startIcon,
  endIcon,
  type,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <Primary
      name={name}
      variant="contained"
      size="large"
      startIcon={startIcon}
      endIcon={endIcon}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Primary>
  );
};

const Secondary = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  border: "1px solid",
  borderColor: styles.primaryAccentHex,
  borderRadius: "6px",
  color: styles.primaryAccentHex,
  "&:hover": {
    backgroundColor: styles.primaryAccent100Hex,
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: styles.primaryAccent100Hex,
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export const SecondaryButton: React.FC<ButtonProps> = ({
  name,
  label,
  startIcon,
  endIcon,
  type,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <Secondary
      name={name}
      variant="outlined"
      size="large"
      startIcon={startIcon}
      endIcon={endIcon}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Secondary>
  );
};

const Link = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  color: styles.secondaryHex,
  "&:hover": {
    backgroundColor: styles.secondaryHoverHex,
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: styles.secondaryHoverHex,
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export const LinkButton: React.FC<ButtonProps> = ({
  name,
  label,
  startIcon,
  endIcon,
  type,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <Link
      name={name}
      variant="text"
      size="large"
      startIcon={startIcon}
      endIcon={endIcon}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Link>
  );
};
