import Image from "next/image";

export default function Home() {

  const ImageCard = ({src, alt, title, description}: {src: string, alt: string, title: string, description: string}) => (
    <div className="w-1/3 text-center min-w-80 p-3">
      <div className="relative w-full md:w-3/4 mx-auto py-0 mb-5">
        <Image src={src} alt={alt} layout="responsive" width={10} height={10} className="rounded-lg" />
      </div>
      <div className="flex flex-col justify-start items-center gap-3">
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );

  return (
    <main className="">
      <section className="mx-auto max-w-6xl my-3 pt-12 flex flex-col justify-center items-center md:my-16 lg:flex-row lg:my-20 px-4 md:px-6">
        <div className="w-full lg:w-1/3 p-2 order-2 lg:order-1">
          <h2 className="text-xl md:text-3xl font-bold mb-2">Wrestling Mat Area</h2>
          <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
            Our spacious wrestling mat area is equipped with high-quality mats that provide a safe and comfortable surface for training.
            This area is designed to host individual training sessions, group classes, and sparring matches.
          </p>
        </div>
        <div className="relative w-full lg:w-2/3 p-2 order-1 lg:order-2">
          <Image src="https://firebasestorage.googleapis.com/v0/b/prep-wrestling-academy-269d8.appspot.com/o/facilities%2Fmat.jpg?alt=media&token=581b31a2-1e81-44e4-9ba3-b1771081e750" alt="Bathroom Facilities" layout="responsive" width={100} height={100} className="rounded-lg overflow-hidden" />
        </div>
      </section>
      <section className="bg-gray-100 w-full py-3 md:py-16 lg:py-24">
        <div className="max-w-6xl m-auto flex flex-wrap justify-center">
          <ImageCard
            src="https://firebasestorage.googleapis.com/v0/b/prep-wrestling-academy-269d8.appspot.com/o/facilities%2Fweight.jpg?alt=media&token=1c1aeb83-97fa-4bf4-afab-de0a16284a09"
            alt="Weight Facilities"
            title="Weight Facilities"
            description="The weight zone is furnished with a variety of strength training equipment, including 
                        free weights, resistance machines, and functional training tools. This area is perfect 
                        for athletes looking to build muscle, improve endurance, and enhance overall fitness."
          />
          <ImageCard
            src="https://firebasestorage.googleapis.com/v0/b/prep-wrestling-academy-269d8.appspot.com/o/facilities%2Fsauna.jpg?alt=media&token=d2d58129-2fcd-48d8-a607-d457ab04d4ce"
            alt="Sauna Room"
            title="Sauna Room"
            description="Our sauna provides a perfect way to relax and recover after 
                        an intense training session. The heat helps in 
                        muscle recovery, reduces stress, and improves overall well-being."
          />
          <ImageCard
            src="https://firebasestorage.googleapis.com/v0/b/prep-wrestling-academy-269d8.appspot.com/o/facilities%2Fbathroom.jpg?alt=media&token=c71dce9f-ffdf-4813-bac9-a390a346a239"
            alt="Bathroom Facilities"
            title="Bathroom Facilities"
            description="The bathroom facilities at PWA are clean, modern, 
                        and well-maintained. They include showers, lockers, and changing 
                        areas to ensure comfort and convenience for our athletes."
          />
        </div>
      </section>
    </main>
  );
}