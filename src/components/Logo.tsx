import iconLogo from "@assets/logo.png";

export interface LogoProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> {}

/**
 * The logo component, used to display the logo of the application.
 */
export const Logo = ({ ...rest }: LogoProps) => {
  return <img src={iconLogo} alt="DASH logo" {...rest} />;
};
