import React, { useEffect, useMemo, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import PropTypes from "prop-types";
import "./Mascot.css";

// Local asset path - replace with a downloaded free Lottie JSON if desired.
import localMascot from "../../assets/lotties/mascot.json";

const REMOTE_FALLBACK =
  "https://assets9.lottiefiles.com/packages/lf20_jtbfg2nb.json"; // gentle wave (public example)

const MascotAnimation = ({ size = 120, position = "bottom-right", autoplay = true, loop = true, controls = false }) => {
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const check = () => setIsReduced(mq ? mq.matches : false);
    check();
    mq?.addEventListener?.("change", check);
    return () => mq?.removeEventListener?.("change", check);
  }, []);

  const style = useMemo(() => {
    const base = {
      width: typeof size === "number" ? `${size}px` : size,
      height: typeof size === "number" ? `${size}px` : size,
    };

    // position mapping
    const pos = {
      "bottom-right": { right: 18, bottom: 18 },
      "bottom-left": { left: 18, bottom: 18 },
      "top-right": { right: 18, top: 18 },
      "top-left": { left: 18, top: 18 },
      inline: { position: "relative" },
    };

    return { ...base, ...(pos[position] || pos["bottom-right"]) };
  }, [size, position]);

  // If local JSON is an empty object or undefined, fall back to remote
  const source = useMemo(() => {
    try {
      if (localMascot && Object.keys(localMascot).length > 0) return localMascot;
    } catch (e) {
      // ignore
    }
    return REMOTE_FALLBACK;
  }, []);

  return (
    <div className={`mascot-wrapper mascot-${position}`} style={style} aria-hidden="true">
      <Player
        autoplay={autoplay && !isReduced}
        loop={loop && !isReduced}
        src={source}
        style={{ width: "100%", height: "100%" }}
        keepLastFrame={true}
        speed={isReduced ? 0 : 0.7}
        controls={controls}
      />
    </div>
  );
};

MascotAnimation.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  position: PropTypes.oneOf(["bottom-right", "bottom-left", "top-right", "top-left", "inline"]),
  autoplay: PropTypes.bool,
  loop: PropTypes.bool,
  controls: PropTypes.bool,
};

export default MascotAnimation;
