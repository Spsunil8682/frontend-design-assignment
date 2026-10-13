type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/** Centered page column matching the 1110px content width in the design. */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1170px] px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
