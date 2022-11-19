import { tw } from "@lib";

export interface TitleBarStyles {
  /**
   * Styles the container of the title, a `<div />` element.
   */
  container?: string;
  /**
   * Styles the title of the current page, a `<h2 />` element.
   */
  title?: string;
}

export interface TitleBarProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "className"> {
  /**
   * The title of the page.
   */
  title: string;
  /**
   * Is this title bar sticky to the top of the page?
   * @default false
   */
  sticky?: boolean;
  styles?: TitleBarStyles;
}

/**
 * The title bar component, used to display the title of the current page.
 */
export const TitleBar = ({
  title,
  sticky = true,
  styles,
  ...rest
}: TitleBarProps) => {
  return (
    <div
      className={tw(
        styles?.container ||
          "flex flex-col items-start justify-center h-16 px-4 bg-white sm:px-12",
        sticky && "sticky top-0 z-10"
      )}
      {...rest}
    >
      <h2 className={styles?.title || "text-xl font-bold"}>{title}</h2>
    </div>
  );
};
