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
export const OutlineBotton = ({ title }: ButtonProps) => {
  return (
    <div className="rounded-2xl block text-lg font-semibold text-lightest_blue py-2 px-6 cursor-pointer border-4 border-red-600  text-center !w-80">
      {title}
    </div>
  );
};

export const PrimaryHeader = ({ title }: Heading) => {
  return <h1 className="text-3xl font-semibold tracking-wide">{title}</h1>;
};

export const SecondaryHeader = ({ title }: Heading) => {
  return (
    <h2 className="text-2xl font-bold tracking-wide text-black">{title}</h2>
  );
};

export interface Heading {
  title: string;
}
