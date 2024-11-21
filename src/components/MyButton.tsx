interface MyButtonProps {
  onClick?: () => void
  children?: React.ReactNode
}

function MyButton({ onClick, children }: MyButtonProps) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
};

export default MyButton;