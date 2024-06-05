'use client';

import Image from "next/image";
import { useEffect } from "react";

interface Profile {
  name: string;
  role: string;
  img: string;
  id: string;
  description: Array<string>;
  education: Array<string>;
  accomplishments: Array<string>;
}

const team: Array<Profile> = [
  { 
    name: 'Kenneth Lee', 
    role: 'Chief Consultant', 
    img: '/profiles/ken.jpg', 
    id: '1',
    description: [
      'As Chief Consultant, Kenneth Lee spearheads recruitment consultation and outreach efforts on behalf of our student-athletes, facilitating connections with a wide range of schools across the United States. With a wealth of experience as a former student-athlete himself, Kenneth brings firsthand knowledge of the complexities involved in athletic recruitment.',
      'Kenneth is the former Vice-President of International Affairs for the Korea Wrestling Federation and currently serves as the Vice-President of United World Wrestling’s Asian Council.'
    ],
    education: [
      'Fay School',
      'Milton Academy',
      'United States Naval Academy',
      'New York University (B.A. Political Science)',
      'Seoul National University (M.A. International Relations)'
    ],
    accomplishments: [
      '3x Independent School League (ISL) Wrestling Champion',
      '2x New England Preparatory School Wrestling Association (NEPSWA) Champion',
      '2x Lehigh Prep National Wrestling Championship All American (3rd & 4th)'
    ]
  },
  { 
    name: 'Jun Ho Kim', 
    role: 'Chief Recruiter', 
    img: '/profiles/junho.jpg', 
    id: '2',
    description: [
      'Jun Ho Kim is the Chief Recruiter at PWA, where he spearheads recruitment efforts and oversees daily operations. With a lifelong passion for wrestling and a deep-seated enthusiasm for sports, Jun Ho is committed to expanding wrestling in schools across Korea in the hopes of fostering physical and mental wellness among children, particularly those in middle and high school.',
      'Jun Ho holds a B.A. in Sports Science from Korea National Sports University.'
    ],
    education: [
      'Korea National Sports University (B.A. Sport Science)'
    ],
    accomplishments: [
      'Member for Korea U20 National Greco-Roman Wrestling Team at 63kg (2006)',
      'National Sports Festival Wrestling Champion (2006)',
      'Presidential Cup Wrestling Champion (2006)',
      'Junior National Wrestling Champion (2006)'
    ]
  },
  { 
    name: 'Ho Won “Michael” Lee', 
    role: 'Head Wrestling Coach', 
    img: '/profiles/howon.jpg', 
    id: '3',
    description: [
    'Michael is a student-athlete enrolled at Catholic Kwandong University, majoring in Sports Healthcare. Alongside his studies, Michael serves as the Head Wrestling Coach at PWA, drawing from a rich background in sports. Before venturing into wrestling, Michael distinguished himself as a nationally ranked bobsledder, demonstrating his versatility and athleticism across multiple disciplines.', 
    'With over a decade of experience in coaching athletes of all ages, Michael brings a wealth of knowledge and expertise to his role. As the Head Coach at PWA, he assumes the responsibility of designing and executing the daily training regimen for our wrestlers, ensuring their development and success on and off the mat.',
    ],
    education: [
      'Catholic Kwandong University (B.A. Sports Healthcare)'
    ],
    accomplishments: [
      'Participated in International Bobsleigh & Skeleton Federation’s (IBSF) North America Cup (2019, 2020)',
      'Alternate member for Korea National Freestyle Wrestling Team at 97kg (2023)'
    ]
  },
  { 
    name: 'Mark Vujovic', 
    role: 'Head Grappling Coach/Assistant Wrestling Coach', 
    img: '/profiles/mark.jpg', 
    id: '4',
    description: [
      'Mark serves as the Resident Head Grappling Coach and Assistant Wrestling Coach at PWA. With over two decades immersed in folkstyle wrestling and grappling, he boasts a remarkable background, having competed at the pinnacle of both sports in the United States and Korea. Mark\'s firsthand experience lends invaluable insights into the journey of aspiring youth wrestlers, encompassing the intricate nuances of becoming a collegiate athlete in the U.S.',
      'Prior to his arrival in Korea, Mark worked as a Research Technician at University of Chicago’s Institute of Mind and Biology.',
    ],
    education: [
      'Northern Illinois University (B.S. Psychology)',
      'University of Chicago (Research Technician)'
    ],
    accomplishments: [
      'Competed at the multiple Spyder Invitational BJJ Tournaments',
      'Competed at SGAA Tournament'
    ]
  }
];

export default function Home() {
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -200; // Adjust this value as needed
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "instant" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <main>
      <section className="bg-white pt-24 pb-12 sm:py-32">
        <div className="flex flex-col lg:flex-row max-w-7xl m-auto px-10 items-center justify-center gap-10">
          <div className="mx-5 lg:mx-auto lg:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Prep Wrestling Academy (PWA) stands as Korea’s foremost institution dedicated to American Folkstyle Wrestling, committed to nurturing children in their personal and professional development. Our core mission is to cultivate young athletes into resilient, well-rounded individuals equipped to navigate life&apos;s challenges with confidence, purpose and dignity, as well as support aspiring student-athletes interested in pursuing a secondary or higher education abroad. 
            </p>
          </div>
          <div className="mx-5 lg:mx-auto lg:w-1/2">
            <div className="relative w-full h-auto mt-4">
              <Image className="contain rounded-lg" src={"/images/about-image.jpeg"} alt="Footer Image" layout="responsive" width={100} height={100}/>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="pt-16 pb-12 sm:pt-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              PWA boasts a dynamic team comprising a diverse blend of former and current wrestlers, each having excelled at the pinnacle of freestyle and folkstyle wrestling in the U.S. and Korea. Our commitment to excellence extends to our instructional offerings, with all classes and private training programs conducted exclusively in English.
            </p>
          </div>
        </div>
        {team.map((profile, i) => (
          <div key={profile.id} id={profile.id} className={`text-balance flex flex-col lg:flex-row justify-center items-center`}>
            <div className={`flex flex-col lg:flex-row max-w-7xl px-6 py-10 lg:px-8 mx-auto ${i!==team.length-1&&'border-b-1.5 border-gray-300'}`}>
              <div className="relative m-auto mb-5 lg:m-auto lg:w-1/3">
                <Image src={profile.img} alt={profile.name} width={400} height={400} className="rounded-lg" />
              </div>
              <div className="lg:w-2/3 px-10 flex flex-col gap-4">
                <p className="flex flex-col items-start justify-center lg:inline">
                  <span className="text-2xl font-bold">{profile.name}</span><span className="text-md text-gray-600 lg:pl-2">{profile.role}</span>
                </p>
                <div className="flex flex-col gap-2 pl-2">
                  {profile.description.map((desc) => (
                    <p key={desc}>{desc}</p>
                  ))}
                </div>
                <div>
                  <div className="text-lg mb-1">Education</div>
                  <ul className="list-disc ml-6">
                    {profile.education.map((school) => (
                      <li key={school}>{school}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-lg mb-1">Accomplishments</div>
                  <ul className="list-disc ml-6">
                    {profile.accomplishments.map((accomplishment) => (
                      <li key={accomplishment}>{accomplishment}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section>
        <div className="py-16 sm:py-24 max-w-7xl flex flex-col lg:flex-row m-auto items-center justify-center">
          <div className="mx-auto px-6 lg:px-8 lg:w-1/2 text-left">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Mentor Consultation Program
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                In the dynamic landscape of boarding school placement and sports recruitment, PWA recognizes the need for tailored support. Hence, we present our exclusive Mentor Consultation Program- a platform where our athletes can engage with esteemed former or current prep school and Ivy League wrestlers. Through this initiative, athletes gain invaluable insights into the intricacies of the recruitment process and pertinent information about the academic milieu of their prospective academic institution. Current mentors include:
              </p>
            </div>
          </div>
          <div className="w-full p-16 m-auto lg:w-1/2">
            <Image src="/images/about-image-2.jpeg" alt="about image" width={200} height={200} layout={'responsive'} className="rounded-lg" />
          </div>
        </div>
      </section>
    </main>
  );
}