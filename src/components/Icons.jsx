/* Lightweight stroke icon set (24px grid, 1.5 stroke) used across the UI. */

function Svg({ children, size = 20, stroke = 1.5, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const IconPhone = (p) => (
  <Svg {...p}>
    <path d="M4.5 5.5c0 7.2 5.8 13 13 13 .9 0 1.5-.7 1.5-1.5v-2.2a1 1 0 0 0-.8-1l-2.6-.5a1 1 0 0 0-1 .4l-.9 1.2a12.6 12.6 0 0 1-5.6-5.6l1.2-.9a1 1 0 0 0 .4-1l-.5-2.6a1 1 0 0 0-1-.8H6c-.8 0-1.5.6-1.5 1.5Z" />
  </Svg>
);

export const IconTruck = (p) => (
  <Svg {...p}>
    <path d="M2.5 7.5h10v9h-10z" />
    <path d="M12.5 11h4l3 3v2.5h-7z" />
    <circle cx="6" cy="18" r="1.6" />
    <circle cx="16.5" cy="18" r="1.6" />
  </Svg>
);

export const IconSearch = (p) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4 4" />
  </Svg>
);

export const IconHeart = (p) => (
  <Svg {...p}>
    <path d="M12 20s-7.5-4.4-7.5-9.4A4.1 4.1 0 0 1 12 7.7a4.1 4.1 0 0 1 7.5 2.9C19.5 15.6 12 20 12 20Z" />
  </Svg>
);

export const IconCart = (p) => (
  <Svg {...p}>
    <path d="M3 4.5h2.2l2.2 10.2h9.7l2-7.4H6.4" />
    <circle cx="9" cy="19" r="1.5" />
    <circle cx="17" cy="19" r="1.5" />
  </Svg>
);

export const IconUser = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="8.5" r="3.6" />
    <path d="M4.8 20c.7-3.5 3.7-5.6 7.2-5.6s6.5 2.1 7.2 5.6" />
  </Svg>
);

export const IconMenu = (p) => (
  <Svg {...p}>
    <path d="M3.5 7h17M3.5 12h17M3.5 17h11" />
  </Svg>
);

export const IconClose = (p) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);

export const IconChevronDown = (p) => (
  <Svg {...p}>
    <path d="m6 9.5 6 6 6-6" />
  </Svg>
);

export const IconArrowLeft = (p) => (
  <Svg {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </Svg>
);

export const IconArrowUp = (p) => (
  <Svg {...p}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </Svg>
);

export const IconCheck = (p) => (
  <Svg {...p}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </Svg>
);

export const IconStar = ({ size = 20, ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...rest}
  >
    <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8z" />
  </svg>
);

export const IconPlus = (p) => (
  <Svg {...p}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);

export const IconLock = (p) => (
  <Svg {...p}>
    <rect x="4.5" y="10.5" width="15" height="9.5" rx="1.5" />
    <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
  </Svg>
);

export const IconMail = (p) => (
  <Svg {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
    <path d="m3.8 7 8.2 6 8.2-6" />
  </Svg>
);

export const IconMapPin = (p) => (
  <Svg {...p}>
    <path d="M12 21s6.5-6 6.5-11a6.5 6.5 0 0 0-13 0C5.5 15 12 21 12 21Z" />
    <circle cx="12" cy="10" r="2.4" />
  </Svg>
);

export const IconClock = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 7.5V12l3 1.8" />
  </Svg>
);

export const IconShield = (p) => (
  <Svg {...p}>
    <path d="M12 3.5 19 6v5.5c0 4.3-2.9 7.6-7 9-4.1-1.4-7-4.7-7-9V6z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </Svg>
);

export const IconRefresh = (p) => (
  <Svg {...p}>
    <path d="M20 12a8 8 0 1 1-2.6-5.9" />
    <path d="M20 4.5V9h-4.5" />
  </Svg>
);

export const IconGrid = (p) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
  </Svg>
);

export const IconHeadset = (p) => (
  <Svg {...p}>
    <path d="M4.5 14v-2a7.5 7.5 0 0 1 15 0v2" />
    <rect x="2.8" y="13" width="4" height="6" rx="1.4" />
    <rect x="17.2" y="13" width="4" height="6" rx="1.4" />
    <path d="M19.5 19c0 1.4-1.6 2.5-4 2.5" />
  </Svg>
);

export const IconBox = (p) => (
  <Svg {...p}>
    <path d="M12 3.5 20 8v8l-8 4.5L4 16V8z" />
    <path d="M4 8l8 4.5L20 8M12 12.5V20" />
  </Svg>
);

export const IconInstagram = (p) => (
  <Svg {...p}>
    <rect x="3.8" y="3.8" width="16.4" height="16.4" rx="4.5" />
    <circle cx="12" cy="12" r="3.8" />
    <circle cx="16.9" cy="7.1" r="0.9" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconTelegram = (p) => (
  <Svg {...p}>
    <path d="M20.5 4.5 3 11.4l5.2 1.8 1.9 5.6 2.6-3.3 4 2.6z" />
    <path d="m8.2 13.2 9-6.3-6.3 8.6" />
  </Svg>
);

export const IconWhatsApp = (p) => (
  <Svg {...p}>
    <path d="M20 11.6a7.9 7.9 0 0 1-11.3 7.1L4 20l1.4-4.5A7.9 7.9 0 1 1 20 11.6Z" />
    <path d="M9.3 8.6c.4 2.6 2.4 4.6 5 5 .5.1.9-.3.9-.8v-.7l-1.7-.6-.7.8a5 5 0 0 1-2-2l.8-.7-.6-1.7h-.9c-.5 0-.9.3-.8.7Z" />
  </Svg>
);
