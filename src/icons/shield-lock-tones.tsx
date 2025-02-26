import type { SVGProps } from 'react';

const ShieldLockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      fill="currentColor"
      {...props}
    >
      <path
        d="M26 19V22H22V19C22 17.8954 22.8954 17 24 17C25.1046 17 26 17.8954 26 19Z"
        fillOpacity="0.3"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.2032 3.34599C23.7115 3.12523 24.2885 3.12523 24.7968 3.34599L40.7968 10.2955C41.5274 10.6128 42 11.3322 42 12.1287V22.5454C42 37.4849 29.7282 44.6502 24.3789 45.9176C24.1268 45.9774 23.8732 45.9774 23.6211 45.9176C18.2718 44.6502 6 37.4849 6 22.5454V12.1287C6 11.3322 6.47264 10.6128 7.20323 10.2955L23.2032 3.34599ZM17 22H19V19C19 16.2386 21.2386 14 24 14C26.7614 14 29 16.2386 29 19V22H31V32H17V22Z"
        fillOpacity="0.3"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 22H17V32H31V22H29V19C29 16.2386 26.7614 14 24 14C21.2386 14 19 16.2386 19 19V22ZM22 22H26V19C26 17.8954 25.1046 17 24 17C22.8954 17 22 17.8954 22 19V22Z"
      />
    </svg>
  );
};

export default ShieldLockIcon;
