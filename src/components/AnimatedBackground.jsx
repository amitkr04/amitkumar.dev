"use client";
import "./animations.css";

import { useState, useEffect } from "react";

const MovingElement = ({ size, duration, delay, colors, shape, trail }) => {
  const [position] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100,
  });

  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [colors.length]);

  const getShapeStyles = () => {
    const baseStyles = {
      width: `${size}px`,
      height: `${size}px`,
      background: `linear-gradient(45deg, ${colors[colorIndex]}, ${
        colors[(colorIndex + 1) % colors.length]
      })`,
      boxShadow: `0 0 ${size / 2}px ${colors[colorIndex]}40, 0 0 ${size}px ${
        colors[colorIndex]
      }20`,
    };

    switch (shape) {
      case "circle":
        return { ...baseStyles, borderRadius: "50%" };
      case "square":
        return { ...baseStyles, borderRadius: "8px" };
      case "triangle":
        return {
          width: 0,
          height: 0,
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size}px solid ${colors[colorIndex]}`,
          background: "transparent",
          filter: `drop-shadow(0 0 ${size / 3}px ${colors[colorIndex]}40)`,
        };
      case "hexagon":
        return {
          ...baseStyles,
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        };
      case "star":
        return {
          ...baseStyles,
          clipPath:
            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        };
      default:
        return baseStyles;
    }
  };

  return (
    <>
      <div
        className="absolute"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          animation: `
            dynamicMove ${duration}s ease-in-out infinite ${delay}s,
            subtlePulse ${duration * 0.5}s ease-in-out infinite ${delay}s,
            gentleScale ${duration * 0.3}s ease-in-out infinite ${delay}s,
            slowRotate ${duration * 4}s linear infinite ${delay}s
          `,
          ...getShapeStyles(),
        }}
      />
      {trail ? (
        <div
          className="absolute opacity-20"
          style={{
            left: `${position.x + 1}%`,
            top: `${position.y + 1}%`,
            animation: `
              dynamicMove ${duration}s ease-in-out infinite ${delay + 0.3}s,
              fadeTrail ${duration * 0.5}s ease-in-out infinite ${delay}s
            `,
            ...getShapeStyles(),
            transform: "scale(0.6)",
          }}
        />
      ) : null}
    </>
  );
};

const DarkParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const slateColorSets = [
      ["#64748b", "#475569", "#334155"],
      ["#475569", "#334155", "#1e293b"],
      ["#64748b", "#94a3b8", "#cbd5e1"],
      ["#334155", "#475569", "#64748b"],
      ["#1e293b", "#334155", "#475569"],
      ["#94a3b8", "#64748b", "#475569"],
      ["#cbd5e1", "#94a3b8", "#64748b"],
      ["#475569", "#64748b", "#94a3b8"],
    ];

    const shapes = ["circle", "square", "triangle", "hexagon", "star"];

    const newParticles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 4,
      colors: slateColorSets[Math.floor(Math.random() * slateColorSets.length)],
      duration: Math.random() * 10 + 6,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
    }));

    setParticles(newParticles);
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <MovingElement
          key={particle.id}
          size={particle.size}
          duration={particle.duration}
          delay={Math.random() * 8}
          colors={particle.colors}
          shape={particle.shape}
          trail={Math.random() > 0.8}
        />
      ))}
    </>
  );
};

const DarkWaves = () => {
  const slateWaveColors = [
    ["#64748b", "#475569", "#334155"],
    ["#475569", "#334155", "#1e293b"],
    ["#94a3b8", "#64748b", "#475569"],
    ["#334155", "#475569", "#64748b"],
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slateWaveColors.map((colors, index) => (
        <div
          key={index}
          className="absolute inset-0 opacity-15"
          style={{
            background: `linear-gradient(${45 + index * 90}deg, ${
              colors[0]
            }30, ${colors[1]}30, ${colors[2]}30)`,
            animation: `darkWaveFlow ${20 + index * 5}s ease-in-out infinite`,
            animationDelay: `${index * 3}s`,
            transform: `rotate(${index * 30}deg) scale(1.2)`,
          }}
        />
      ))}
    </div>
  );
};

const SlateOrbs = () => {
  const slateShades = [
    "#64748b",
    "#475569",
    "#334155",
    "#94a3b8",
    "#cbd5e1",
    "#1e293b",
  ];

  return (
    <div className="absolute inset-0">
      {slateShades.map((color, index) => (
        <div
          key={index}
          className="absolute rounded-full opacity-25"
          style={{
            left: `${(index * 17) % 90}%`,
            top: `${(index * 23) % 90}%`,
            width: `${80 + index * 15}px`,
            height: `${80 + index * 15}px`,
            background: `radial-gradient(circle, ${color}40, transparent 70%)`,
            animation: `slateOrb ${12 + index * 2}s ease-in-out infinite`,
            animationDelay: `${index * 1.5}s`,
          }}
        />
      ))}
    </div>
  );
};

const DarkStreaks = () => {
  const streakColors = ["#64748b", "#475569", "#334155", "#94a3b8", "#cbd5e1"];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {streakColors.map((color, index) => (
        <div
          key={index}
          className="absolute opacity-20"
          style={{
            width: "1px",
            height: "150%",
            left: `${index * 20}%`,
            top: "-25%",
            background: `linear-gradient(to bottom, transparent, ${color}60, transparent)`,
            animation: `darkStreak ${8 + index * 2}s linear infinite`,
            animationDelay: `${index * 2}s`,
            transform: `rotate(${10 + index * 3}deg)`,
            boxShadow: `0 0 8px ${color}40`,
          }}
        />
      ))}
    </div>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-slate-900" />

      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 opacity-80"
          style={{ animation: "darkGradientShift 25s ease-in-out infinite" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-tr from-slate-700 via-slate-800 to-slate-900 opacity-60"
          style={{
            animation: "darkGradientShift 30s ease-in-out infinite reverse",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-bl from-slate-600 via-slate-700 to-slate-800 opacity-40"
          style={{ animation: "darkGradientShift 35s ease-in-out infinite" }}
        />
      </div>

      <DarkWaves />
      <SlateOrbs />
      <DarkStreaks />
      <DarkParticles />

      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              width: `${15 + i * 4}px`,
              height: `${15 + i * 4}px`,
              background: `linear-gradient(45deg, #64748b${Math.floor(
                0.3 * 255
              ).toString(16)}, #475569${Math.floor(0.5 * 255).toString(16)})`,
              boxShadow: `0 0 ${15 + i * 4}px #64748b40`,
              animation: `darkOrbit ${25 + i * 3}s linear infinite`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border opacity-15"
            style={{
              left: `${25 + i * 15}%`,
              top: `${25 + i * 15}%`,
              width: `${120 + i * 40}px`,
              height: `${120 + i * 40}px`,
              borderColor: `#64748b`,
              borderWidth: "2px",
              animation: `darkPulseRing ${6 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`,
              boxShadow: `0 0 15px #64748b30`,
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(#64748b 1px, transparent 1px),
            linear-gradient(90deg, #64748b 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
