import { ReactNode } from "react";

interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

export default function Header({ children, image }: HeaderProps) {
  return (
    <header>
      <img src={image.src} alt={image.src} />
      {children}
    </header>
  );
}
