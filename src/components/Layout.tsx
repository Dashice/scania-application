export interface LayoutStyles {
  /**
   * Styles the container, the `<main/>` element.
   */
  main: string;
}

export interface LayoutProps {
  /**
   * The JSX to render, representing the header of the site / application.
   */
  headerJSX: React.ReactNode;
  /**
   * The JSX to render, representing the main content of the site / application.
   */
  children: React.ReactNode;
  /**
   * The JSX to render, representing the footer of the site / application.
   */
  footerJSX?: React.ReactNode;
  styles?: LayoutStyles;
}

/**
 * The layout component, used to display the header, main content and footer of the site / application.
 */
export const Layout = ({
  headerJSX,
  children,
  footerJSX,
  styles,
}: LayoutProps) => {
  return (
    <>
      {headerJSX}
      <main className={styles?.main || "flex-1 bg-scania-gray-100"}>
        {children}
      </main>
      {footerJSX}
    </>
  );
};
