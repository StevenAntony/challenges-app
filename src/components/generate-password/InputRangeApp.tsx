type Props = {
  setCharacterLength: (value: number) => void;
  characterLength: number;
}

export default function InputRangeApp({
  setCharacterLength,
  characterLength
}: Props) {
  return (
    <div className="w-full h-[40px] bg-[#26173c] rounded-2xl mt-1 flex items-center px-3 relative">
      <input
        type="range"
        value={characterLength}
        onChange={(e) => setCharacterLength(Number(e.target.value))}
        min={8}
        max={32}
        className="w-full bg-[#bf5eed] rounded-xl mt-1 outline-none px-3"
      />
    </div>
  )
}
