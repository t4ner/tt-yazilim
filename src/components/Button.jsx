import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white,
  ariaLabel,
}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 focus:outline-none focus:ring-2 focus:ring-color-1 focus:ring-offset-2 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const commonProps = {
    className: classes,
    "aria-label": ariaLabel || children,
    role: "button",
    tabIndex: 0,
    onKeyDown: (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick?.(e);
      }
    },
  };

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...commonProps}>
        <span className="relative z-10">{children}</span>
        {ButtonSvg(white)}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button" {...commonProps}>
      <span className="relative z-10">{children}</span>
      {ButtonSvg(white)}
    </button>
  );
};

export default Button;
