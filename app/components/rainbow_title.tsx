const RainbowTitle = ({ text }: { text:string }):React.JSX.Element => {
  return (
    <span className="font-poppins font-bold text-6xl lg:text-8xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-sky-500 dark:from-pink-500 to-purple-800 dark:to-purple-800 shadow-around">
        {text}
    </span>
  )
}

export default RainbowTitle
