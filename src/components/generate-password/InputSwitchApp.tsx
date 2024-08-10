'use client'
import { useState } from "react";

type Props = {
  color?: string;
  setInclude: (value: boolean) => void;
  include: boolean;
}

export default function InputSwitchApp({
  color = '#e8eaed',
  setInclude,
  include
}: Props) {

  const handleToggle = () => {
    setInclude(!include);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={include}
          onChange={handleToggle}
        />
        <div className={`w-10 h-5 ${include ? 'bg-[#bf5eed]' : 'bg-white'} rounded-full shadow-inner`}></div>
        <div
          className={`dot absolute left-[3px] top-[2.5px] w-4 h-4  rounded-full shadow transform transition ${include ? 'translate-x-full bg-white' : 'bg-[#bf5eed]'}`}
        ></div>
      </div>
    </label>
  )
}
