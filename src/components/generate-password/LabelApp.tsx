type Props = {
  title: string;
  extraRight?: React.ReactNode;
}

export default function LabelApp({
  title,
  extraRight
}: Props) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-[#8a8692] text-[10px] font-semibold uppercase">{title}</span>
      {extraRight}
    </div>
  )
}
