import iconLogo from "@assets/logo.png";

export interface LogoProps
  extends Omit<React.HTMLAttributes<HTMLImageElement>, "src" | "alt"> {}

export const Logo = ({ ...rest }: LogoProps) => {
  return <img src={iconLogo} alt="DASH logo" {...rest} />;
};
