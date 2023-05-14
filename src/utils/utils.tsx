interface ButtonProps {
  title: string;
  color?: string;
}
export const ButtonPrimary = ({ title }: ButtonProps) => {
  return (
    <div className="rounded-md block bg-light_blue text-md font-medium text-primary_white py-2 px-6 cursor-pointer">
      {title}
    </div>
  );
};

export const PrimaryHeader = ({ title }: { title: string }) => {
  return <h1 className="text-3xl font-semibold tracking-wide">{title}</h1>;
};
