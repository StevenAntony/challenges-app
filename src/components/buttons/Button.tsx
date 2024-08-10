import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
export default function Button(props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`w-full h-[40px] rounded-md text-xs mt-1 ${props.className}`}
    >
      {props.children}
    </button>
  )
}
