import React, { PropsWithChildren } from "react";
import { cx, css, ClassNamesArg } from "@emotion/css/macro";

type ButtonColor =
  | "discord"
  | "twitter"
  | "white"
  | "light"
  | "dark"
  | "black"
  | "text"
  | "ghost"
  | "primary"
  | "link"
  | "info"
  | "success"
  | "warning"
  | "danger";

enum ButtonSize {
  small = "small",
  normal = "normal",
  medium = "medium",
  large = "large",
}

type ButtonSizeString = keyof typeof ButtonSize;

type ButtonState = "normal" | "hovered" | "focused" | "active" | "loading";

type Props = {
  inverted?: boolean;
  outlined?: boolean;
  text?: string;
  fullWidth?: boolean;
  light?: boolean;
  round?: boolean;
  isStatic?: boolean;
  disabled?: boolean;
  color?: ButtonColor;
  size?: ButtonSizeString;
  placeholder?: string;
  state?: ButtonState;
  icon?: JSX.Element;
  className?: ClassNamesArg;
  href?: string;
  target?: string;
  onClick?: () => void;
};

function Button({
  inverted,
  outlined,
  text,
  children,
  color = "primary",
  state = "normal",
  size = "normal",
  round = false,
  fullWidth = false,
  light = false,
  disabled = false,
  isStatic = false,
  onClick,
  icon,
  className,
  href,
  target,
  ...props
}: PropsWithChildren<Props>) {
  let featherIconSize = 16;
  switch (size) {
    case ButtonSize.small:
      featherIconSize = 12;
      break;
    case ButtonSize.normal:
      break;
    case ButtonSize.medium:
      featherIconSize = 20;
      break;
    case ButtonSize.large:
      featherIconSize = 24;
      break;
  }
  var featherIcon = icon ? (
    <span className={cx("icon", `is-${size}`, styles.buttonIcon, className)}>
      {icon}
    </span>
  ) : null;

  var buttonClasses = cx(
    "button",
    size && `is-${size}`,
    state && `is-${state}`,
    color && `is-${color}`,
    round && `is-rounded`,
    inverted && `is-inverted`,
    outlined && `is-outlined`,
    className
  );

  if (href != null) {
    return (
      <a
        className={buttonClasses}
        href={href}
        target={target}
        onClick={onClick}
      >
        {featherIcon}
        <span>{children}</span>
      </a>
    );
  } else {
    return (
      <button className={buttonClasses} onClick={onClick}>
        {icon}
        <span>{children}</span>
      </button>
    );
  }
}

const styles = {
  buttonIcon: css`
    .button .icon:first-child:not(:last-child)& {
      margin-right: 4px;
    }
  `,
};

export default Button;
