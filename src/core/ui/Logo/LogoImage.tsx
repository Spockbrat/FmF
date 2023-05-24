import classNames from 'classnames';

const LogoImage: React.FCC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg
    width={105}
    className={classNames(`w-[95px] sm:w-[105px]`, className)}
    viewBox="0 0 350 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{"blendoor symbol/blue"}</title>
    <defs>
      <linearGradient
        id="b"
        x1="94.209%"
        x2="27.983%"
        y1="-5.539%"
        y2="113.627%"
      >
        <stop offset="0%" stopColor="#002A45" />
        <stop offset="59.424%" stopColor="#064C69" stopOpacity={0.891} />
        <stop offset="100%" stopColor="#0C6EA0" stopOpacity={0.392} />
      </linearGradient>
      <linearGradient id="e" x1="-2.32%" x2="89.039%" y1="108.439%" y2="0%">
        <stop offset="0%" stopColor="#002A45" />
        <stop offset="100%" stopColor="#0C6EA0" />
      </linearGradient>
      <path
        id="a"
        d="M25.973.75C11.6.941.008 12.639 0 27.052v99.631C.008 141.221 11.794 153 26.33 153h49.587s-24.501-1.203-24.501-25.995c0-38.337-.006-101.252-.006-101.252C51.41 11.729 39.952.941 25.973.75Z"
      />
      <path
        id="d"
        d="M25.41 25.753s.006 65.743.006 104.082c.861 12.844 11.471 23.008 24.501 23.157V153h16.202c23.598 0 42.723-19.128 42.723-42.723 0-24.223-20.304-46.125-45.782-44.317 14.966-3.124 26.214-16.356 26.214-32.209C89.274 15.578 74.495.842 56.265.84L.052.756C13.996.982 25.41 11.757 25.41 25.753"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(0 .25)">
        <mask id="c" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <path
          fill="url(#b)"
          d="M25.973.75C11.6.941.008 12.639 0 27.052v99.631C.008 141.221 11.794 153 26.33 153h49.587s-24.501-1.203-24.501-25.995c0-38.337-.006-101.252-.006-101.252C51.41 11.729 39.952.941 25.973.75Z"
          mask="url(#c)"
        />
      </g>
      <g transform="translate(25 .25)">
        <mask id="f" fill="#fff">
          <use xlinkHref="#d" />
        </mask>
        <path
          fill="url(#e)"
          d="M25.41 25.753s.006 65.743.006 104.082c.861 12.844 11.471 23.008 24.501 23.157l16.202.008c23.598 0 42.723-19.128 42.723-42.723 0-24.223-20.304-46.125-45.782-44.317 14.966-3.124 26.214-16.356 26.214-32.209C89.274 15.578 74.495.842 56.265.84L.052.756C13.996.982 25.41 11.757 25.41 25.753L139-4.25"
          mask="url(#f)"
        />
      </g>
    </g>
  </svg>
  );
};

export default LogoImage;
