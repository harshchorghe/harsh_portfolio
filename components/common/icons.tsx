import React from "react";

type IconProps = { size?: number; className?: string };

/* ================= MENU ================= */
export const Menu = ({ size = 20, className = "" }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 6h18M3 12h18M3 18h18"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ================= HOME ================= */
export const Home = ({ size = 20, className = "" }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ================= BRIEFCASE ================= */
export const Briefcase = ({ size = 20, className = "" }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect
      x="3"
      y="7"
      width="18"
      height="13"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

/* ================= YOUTUBE ================= */
export const Youtube = ({ size = 20, className = "" }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M22.54 6.42a2.6 2.6 0 0 0-1.83-1.84C18.88 4 12 4 12 4s-6.88 0-8.71.58A2.6 2.6 0 0 0 1.46 6.42 27.72 27.72 0 0 0 0 12a27.72 27.72 0 0 0 1.46 5.58 2.6 2.6 0 0 0 1.83 1.84C5.12 20 12 20 12 20s6.88 0 8.71-.58a2.6 2.6 0 0 0 1.83-1.84A27.72 27.72 0 0 0 24 12a27.72 27.72 0 0 0-1.46-5.58z"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path d="M10 15l5-3-5-3v6z" fill="currentColor" />
  </svg>
);

/* ================= MAIL ================= */
export const Mail = ({ size = 20, className = "" }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

/* ================= SUN ================= */
export const Sun = ({ size = 20, className = "" }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

/* ================= MOON ================= */
export const Moon = ({ size = 20, className = "" }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

/* ================= INSTAGRAM ================= */
export const Instagram = ({ size = 20, className = "" }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
      stroke="currentColor"
      strokeWidth="1"
    />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

/* ================= LINKEDIN ================= */
export const Linkedin = ({ size = 20, className = "" }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16 8a2 2 0 0 1 2 2v6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 11v7M8 8v.01" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

/* ================= GLOBE ================= */
export const Globe = ({ size = 20, className = "" }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M2 12h20M12 2c2.5 3 2.5 9 0 20M12 2c-2.5 3-2.5 9 0 20"
      stroke="currentColor"
      strokeWidth="1"
    />
  </svg>
);

/* ================= GITHUB - NEW! ================= */
export const Github = ({ size = 20, className = "" }: IconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ================= EXPORT ================= */
const Icons = {
  Menu,
  Home,
  Briefcase,
  Youtube,
  Mail,
  Sun,
  Moon,
  Instagram,
  Linkedin,
  Globe,
  Github, // ← Added here!
};

export default Icons;
export type { IconProps };