interface IProps {
  classes?: string;
}
export default function IconThreeLines({
  classes = "inline-block md:h-10 md:w-10  w-7  h-7 stroke-current text-primary",
}: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  );
}
