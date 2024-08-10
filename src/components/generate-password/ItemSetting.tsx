import InputSwitchApp from "./InputSwitchApp"

type props = { title: string, setInclude: (value: boolean) => void, include: boolean }

const ItemSetting = ({ title, setInclude, include } : props) => {
  return (
    <div className="w-full h-[40px] bg-[#26173c] rounded-2xl mt-1 flex items-center px-3 relative justify-between">
      <div className="text-[10px] text-[#c1b4c7]">{title}</div>
      <InputSwitchApp  setInclude={setInclude} include={include} />
    </div>
  )
}

export default ItemSetting
