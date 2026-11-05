"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const INTRO_KEY = "mirvate-intro-seen";

type LogoIntroProps = {
  force?: boolean;
};

export function LogoIntro({ force = false }: LogoIntroProps) {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<"boot" | "show" | "done">("boot");

  useEffect(() => {
    if (reduced) {
      setPhase("done");
      return;
    }

    try {
      if (!force && sessionStorage.getItem(INTRO_KEY) === "1") {
        setPhase("done");
        return;
      }
    } catch {
      // ignore
    }

    setPhase("show");
    document.documentElement.classList.add("intro-active");

    const done = window.setTimeout(() => {
      setPhase("done");
      document.documentElement.classList.remove("intro-active");
      try {
        sessionStorage.setItem(INTRO_KEY, "1");
      } catch {
        // ignore
      }
    }, 2400);

    return () => {
      window.clearTimeout(done);
      document.documentElement.classList.remove("intro-active");
    };
  }, [force, reduced]);

  if (phase === "boot") {
    return <div className="fixed inset-0 z-[100] bg-void" aria-hidden />;
  }

  return (
    <AnimatePresence>
      {phase === "show" ? (
        <motion.div
          key="logo-intro"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-void"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.14)_0%,transparent_55%)]" />

          <motion.div
            className="relative flex flex-col items-center gap-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/mirvate-logo-v2.png"
                alt=""
                width={420}
                height={108}
                priority
                unoptimized
                className="h-14 w-auto object-contain drop-shadow-[0_0_40px_rgba(0,240,255,0.25)] sm:h-20"
              />
            </motion.div>

            <motion.div
              className="h-px w-28 origin-center bg-gradient-to-r from-transparent via-primary-container to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.6 }}
            />

            <motion.p
              className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.35em] text-on-surface-variant uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.75 }}
            >
              Engineering What&apos;s Next
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
