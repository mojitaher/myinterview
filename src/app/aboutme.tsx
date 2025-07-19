import Image from "next/image";
import avatar from "../../public/img/avatar.png";

export default function Aboutme() {
  return (
    <div>
      <h1
        className="text-white text-4xl p-4"
        style={{
          textShadow: `
      0 1px 0 #00ffcc,
      0 2px 0 #00ffcc,
      0 3px 2px rgba(0, 255, 204, 0.5),
      0 0 10px #00ffe0,
      0 0 20px #00ffe0
    `,
        }}
      >
        about me
      </h1>
      <div className="flex justify-between p-6 gap-5 items-center bg-black rounded-3xl">
        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF99] via-[#00D1FF99] to-[#0066FF99] leading-normal  ">
          I am Mojtaba Taherkhani, a front-end developer. I love programming and
          this makes me want to improve and learn more in this field. The tools
          I work with are Next.js, React, and TypeScript. I use Tailwind for
          design and in some cases I use Material UI for ready-made components,
          but due to the heavy nature of the project, I mostly use Flowbite
          React.I spent eight months at the Frontline Coding Bootcamp learning
          things like Racket, Tailwind, and JavaScript, and I have certificates
          in them. My main goal for this path is to become a full-stack
          developer and I will do my best to achieve this.
        </p>
        <Image
          src={avatar}
          alt="avatar"
          width={500}
          height={500}
          className=" bg-gradient-to-r from-[#00D1FF99] via-[#0066FF99] to-[#00113399] rounded-l-full "
        />
      </div>
    </div>
  );
}
