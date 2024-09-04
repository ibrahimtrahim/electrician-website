import Image from "next/image"
import Button from "./Button"

const AboutUs = () => {
  return (
    <>
    <section className="padding-container py-5 bg-neutral-100 lg:py-10">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-1 lg:order-2">
            <Image src="/images/aboutus.png" alt="about BMH ELECTRIC" width={800} height={500}/>
            </div>
            <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p className="text-4xl font-bold md:text-7xl text-orange-600">About US</p>
            <p className="mt-2 text-sm md:text-lg">With over 33 years of experience in residential electrical work, we bring unparalleled expertise and a meticulous eye for detail to every project we undertake. Our commitment to quality and dedication to hard work ensures that your home is in safe, capable hands. Whether you're renovating, building new, or need electrical maintenance, we are here to provide reliable and professional service that exceeds your expectations. Trust us to power your home with precision and care.</p>
            <Button title="Contact Now" type={"button"} />
            </div>
            
        </div>
    </section>
    </>
  )
}

export default AboutUs