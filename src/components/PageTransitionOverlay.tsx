import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransitionOverlay() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const [phase, setPhase] = useState<"idle" | "cover" | "hold" | "reveal">("idle");

  useEffect(() => {
    if (location.pathname !== prevPath.current) {
      prevPath.current = location.pathname;
      
      // Phase 1: instantly cover the screen
      setPhase("cover");

      // Phase 2: hold (content swaps + scroll resets underneath)
      const holdTimer = setTimeout(() => {
        setPhase("hold");
      }, 100);

      // Phase 3: reveal new page
      const revealTimer = setTimeout(() => {
        setPhase("reveal");
      }, 700);

      // Phase 4: cleanup
      const idleTimer = setTimeout(() => {
        setPhase("idle");
      }, 1300);

      return () => {
        clearTimeout(holdTimer);
        clearTimeout(revealTimer);
        clearTimeout(idleTimer);
      };
    }
  }, [location.pathname]);

  if (phase === "idle") return null;

  return (
    <>
      <style>{`
        .pt-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
        }

        /* Phase 1: appear instantly - no animation */
        .pt-cover {
          opacity: 1;
        }

        /* Phase 2: hold at full opacity */
        .pt-hold {
          opacity: 1;
        }

        /* Phase 3: smooth reveal */
        .pt-reveal {
          animation: ptReveal 0.55s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes ptReveal {
          0%   { opacity: 1; }
          100% { opacity: 0; }
        }

        .pt-text {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: clamp(28px, 5vw, 64px);
          letter-spacing: 0.18em;
          color: #0a0a0a;
        }

        .pt-cover .pt-text,
        .pt-hold .pt-text {
          animation: ptTextIn 0.4s ease-out 0.05s both;
        }

        .pt-reveal .pt-text {
          animation: ptTextOut 0.35s ease-in forwards;
        }

        @keyframes ptTextIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ptTextOut {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(-6px); }
        }
      `}</style>
      <div className={`pt-overlay pt-${phase}`}>
        <span className="pt-text">metaseti &reg;</span>
      </div>
    </>
  );
}
