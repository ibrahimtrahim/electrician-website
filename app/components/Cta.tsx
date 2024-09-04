import Button from "./Button"

const Cta = () => {
  return (
    <div className="bg-gray-30">
        <div className="padding-container flex justify-around py-16 items-center">
            <p className="text-xl md:text-2xl font-bold text-white">Looking for a quality and affordable electrician service?</p>
            <Button title="Conatct Us" type={"button"} />
        </div>
    </div>
  )
}

export default Cta