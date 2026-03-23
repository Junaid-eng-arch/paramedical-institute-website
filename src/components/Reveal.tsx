import {
  ElementType,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  threshold?: number;
  x?: number;
  y?: number;
} & Omit<HTMLAttributes<HTMLElement>, "children">;

const Reveal = <T extends ElementType = "div">({
  as,
  children,
  className,
  delay = 0,
  distance = 24,
  threshold = 0.15,
  style,
  x = 0,
  y,
  ...props
}: RevealProps<T>) => {
  const Component = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  const translateY = y ?? distance;

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translate3d(0, 0, 0)"
          : `translate3d(${x}px, ${translateY}px, 0)`,
        transition:
          "opacity 0.6s ease-out, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Reveal;
