const PrimaryButton = ({ className, labels='' }) => {
  return (
    <button className={`btn bg-primary text-secondary hover:bg-primary/90 transition-colors ${className}`}>
      {labels}
    </button>
  )
}


export default PrimaryButton;