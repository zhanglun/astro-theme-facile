export interface Props {
  datetime: string;
  size?: "sm" | "lg";
  className?: string;
}

export default function Datetime({ datetime, size = "sm", className }: Props) {
  return (
    <div className={`font-bold opacity-80 flex items-center justify-center space-x-2 ${className}`}>
      <span className="sr-only">Posted on:</span>
      <span className={`${size === "sm" ? "text-base" : "text-xl"}`}>
        <FormattedDatetime datetime={datetime} />
      </span>
    </div>
  );
}

const FormattedDatetime = ({ datetime }: { datetime: string }) => {
  const myDatetime = new Date(datetime);
  
  const date = myDatetime.toLocaleDateString([], {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const time = myDatetime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      {date}
      <span aria-hidden="true"> | </span>
      <span className="sr-only">&nbsp;at&nbsp;</span>
      {time}
    </>
  );
};
