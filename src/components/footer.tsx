import Link from "next/link";
import { InstagramIcon, LocationIcon, MailIcon, PhoneIcon } from "./icons";
import Image from "next/image";

export const Footer = () => (
  <footer className="w-full py-12 md:py-12 lg:py-16 bg-gray-100 flex border-t-1.5 border-gray-200">
    <div className="container m-auto px-4 md:px-6 flex flex-col md:flex-row">
      <div className="lg:w-1/2 p-8 pb-0 lg:pb-8">
        <h1 className="text-3xl font-bold mb-3">Get In Touch</h1>
        <div className="flex items-start text-sm">
          <div className="flex flex-col gap-2 p-2 w-full">
            <div className="flex gap-3 items-center">
              <LocationIcon /> 서울특별시 강남구 도산대로35길 39, B1
            </div>
            <div className="flex gap-3 items-center">
              <PhoneIcon /> 070 - 8657 - 0424
            </div>
            <div className="flex gap-3 items-center">
              <MailIcon /> koreawrestler@gmail.com
            </div>
            <div>
              <Link className="flex gap-3 items-center" href={"https://www.instagram.com/prep_wrestling_academy/"} target="_blank">
                <InstagramIcon /> @prep_wrestling_academy
              </Link>
            </div>
            <div className="relative w-full h-auto aspect-2.86 mt-4">
              <Image className="contain" src={"/images/footer-image.jpeg"} alt="Footer Image" fill/>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 p-8 lg:p-0 min-h-80">
        <iframe className="w-full h-full min-h-80" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.339525897202!2d127.02776957587176!3d37.523492972049766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca38de955d679%3A0x9c67b0bd75660acf!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrj4TsgrDrjIDroZwzNeq4uCAzOQ!5e0!3m2!1sko!2skr!4v1717054389658!5m2!1sko!2skr" width="600" height="450" allowFullScreen={false} aria-hidden="false" tabIndex={0}></iframe>
      </div>
    </div>
  </footer>
)