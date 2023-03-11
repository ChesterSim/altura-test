import { FC } from "react";

export const Input: FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = (props) => {
  return (
    <input
      className="w-full rounded-lg border border-gray-300 bg-black p-4 text-sm text-gray-100"
      {...props}
    />
  );
};
