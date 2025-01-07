interface InputProps {
  placeholder : string,
  value? : number,
  fontSize? : number,
  handleChange? : (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input : React.FC<InputProps> = ({placeholder, value, fontSize, handleChange}) => {
  return (
    <input type="number" className={`[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
       resize-none focus:outline-none w-full  bg-[#1B1B1B] placeholder-[#5E5E5E] text-[${fontSize}px]`}
      placeholder={placeholder} onChange={handleChange} value={value}></input>
  )
  
}

export default Input