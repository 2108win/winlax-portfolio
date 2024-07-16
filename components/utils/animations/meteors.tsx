"use client";

import clsx from "clsx";
import { CSSProperties, useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
  colors?: { first: string; second: string };
}

export function Meteors({
  number = 20,
  colors = { first: "#FC354C", second: "#0ABFBC" },
}: MeteorsProps) {
  const [meteorStyles, setMeteorStyles] = useState<Array<CSSProperties>>([]);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: `${Math.floor(Math.random() * window.innerWidth)}px`,
      animationDelay: `${Math.random() * 1 + 0.2}s`,
      animationDuration: `${Math.floor(Math.random() * 8 + 5)}s`,
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          className={clsx(
            "pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[230deg] animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
          )}
          style={style}
        >
          {/* Meteor Tail */}
          <div
            className={clsx(
              "pointer-events-none absolute top-1/2 -z-10 h-px w-[100px] -translate-y-1/2 bg-gradient-to-r from-[var(--from-meteor-tail-color-light)] to-transparent dark:from-[var(--from-meteor-tail-color-dark)]",
            )}
            style={
              {
                "--from-meteor-tail-color-dark": `${colors.first}`,
                "--from-meteor-tail-color-light": `${colors.second}`,
              } as CSSProperties
            }
          />
        </span>
      ))}
    </>
  );
}

export default Meteors;
