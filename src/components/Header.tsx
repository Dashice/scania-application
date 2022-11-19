import { Logo } from "@components";

export interface HeaderStyles {
  /**
   * Styles the `<header>` element.
   */
  container?: string;
  /**
   * Styles the title, `<h1>` element.
   */
  title?: string;
  /**
   * Styles the wrapping `<div />` of the `<Logo />` component.
   */
  logoWrapper?: string;
  /**
   * Styles the `<Logo />` component.
   */
  logo?: string;
}

export interface HeaderProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "role" | "className"> {
  styles?: HeaderStyles;
}

/**
 * The header component, used to display the header of the site / application.
 */
export const Header = ({ styles, ...rest }: HeaderProps) => {
  return (
    <header
      role="banner"
      className={
        styles?.container ||
        "relative flex items-center justify-between text-white h-14 bg-scania-blue-primary"
      }
      {...rest}
    >
      <h1 className={styles?.title || "px-4 text-sm font-bold"}>
        Fleet Portal
      </h1>
      <div
        className={
          styles?.logoWrapper ||
          "flex h-full px-4 flex-center border-s border-scania-blue-secondary"
        }
      >
        <Logo height={25} width={25} className={styles?.logo} />
      </div>
    </header>
  );
};
