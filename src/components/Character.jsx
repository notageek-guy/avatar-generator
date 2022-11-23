import Avatar from "react-nice-avatar";
export default function Character({ config }) {
  return (
    <Avatar
      className="mx-auto my-4
        w-32 h-32 block items-center justify-center
    "
      {...config}
    />
  );
}
