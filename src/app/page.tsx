import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const ProfileCard = ({ name, role, img, href }: { name: string; role: string; img: string; href: string }) => (
    <Link className="flex flex-col items-center justify-center space-y-4 text-center cursor-pointer" href={href}>
      <Image
        alt={name}
        className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
        height="200"
        src={img}
        width="200"
        layout="responsive"
      />
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-gray-500">{role}</p>
      </div>
    </Link>
  );

  
  return (
    <main className="bg-gray-900">
      <section className="relative isolate overflow-hidden pt-14" id="hero">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/prep-wrestling-academy-269d8.appspot.com/o/images%2Fhero-image.jpeg?alt=media&token=47f384f0-0f37-4801-bee7-196d0044c7a0"
          layout="responsive"
          width={100}
          height={100}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover filter brightness-[0.25]"
        />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Building Champions, On and Off the Mat
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href={'/program#schedule'}
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Check Schedule
              </Link>
              <Link href="#1" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </section>

      <section className="bg-white py-24 sm:py-32" id="1">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Welcome to Prep Wrestling Academy (PWA)
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Korea&apos;s premier institution for American Folkstyle Wrestling, dedicated to fostering personal and
              professional growth in young athletes.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container m-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Programs</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                PWA offers a range of programs to help young athletes develop their skills and reach their full
                potential, including Personalized Training Sessions, American Folkstyle Wrestling Classes, Sports
                Recruitment Videos and Portfolios, and Sports Recruitment Consultation.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-4">
                <Link
                  className="group grid h-auto w-full justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    Personalized Training Sessions
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500">
                    Tailored training programs to help athletes reach their full potential.
                  </div>
                </Link>
                <Link
                  className="group grid h-auto w-full justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    American Folkstyle Wrestling Classes
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500">
                    Comprehensive training in the art of American Folkstyle Wrestling.
                  </div>
                </Link>
                <Link
                  className="group grid h-auto w-full justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    Sports Recruitment Videos and Portfolios
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500">
                    Professional-grade videos and portfolios to showcase your skills.
                  </div>
                </Link>
                <Link
                  className="group grid h-auto w-full justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  <div className="text-sm font-medium leading-none group-hover:underline">
                    Sports Recruitment Consultation
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug text-gray-500">
                    Expert guidance to navigate the college recruitment process.
                  </div>
                </Link>
              </div>
            </div>
            <Image
              alt="Programs"
              className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              src="https://firebasestorage.googleapis.com/v0/b/prep-wrestling-academy-269d8.appspot.com/o/images%2Fschedule.jpeg?alt=media&token=051d337c-0af2-47bc-a1fc-2caeb1b196af"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container m-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Coaches</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the experienced and dedicated coaches who are committed to helping our athletes achieve their
                goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 xl:grid-cols-4">
            <ProfileCard name="Kenneth Lee" role="Chief Consultant" img="https://firebasestorage.googleapis.com/v0/b/prep-wrestling-academy-269d8.appspot.com/o/profiles%2Fken.jpg?alt=media&token=4f7449ec-e459-4ff0-bc77-43c8327e0ebc" href="/about#1" />
            <ProfileCard name="Jun Ho Kim" role="Chief Recruiter" img="https://firebasestorage.googleapis.com/v0/b/prep-wrestling-academy-269d8.appspot.com/o/profiles%2Fjunho.jpg?alt=media&token=3f2f0a6a-9804-45a6-809b-f377a4eea35a" href="/about#2" />
            <ProfileCard name="Ho Won “Michael” Lee" role="Head Wrestling Coach" img="https://firebasestorage.googleapis.com/v0/b/prep-wrestling-academy-269d8.appspot.com/o/profiles%2Fhowon.jpg?alt=media&token=b8956e89-5ab3-486e-9b45-286769f59bcb" href="/about#3" />
            <ProfileCard name="Mark Vujovic" role="Head Grappling Coach/Assistant Wrestling Coach" img="https://firebasestorage.googleapis.com/v0/b/prep-wrestling-academy-269d8.appspot.com/o/profiles%2Fmark.jpg?alt=media&token=e37c03e7-b51b-4a86-9b4b-73fb18148e3e" href="/about#4" />
          </div>
        </div>
      </section>
    </main>
  )
}
