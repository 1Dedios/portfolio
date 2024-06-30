import logo from '/public/logo.png';
import Button from '@/components/Button';
import Flipcard from '../components/FlipCard';

export default function ProjectSection() {
  const flipFirstCardWidth = 200;
  const flipFirstCardHeight = 50;

  return (
    <div className="min-h-screen h-full px-20 py-10 bg-navy">
      <h1 className="text-6xl text-center font-poppins pb-10">PROJECTS</h1>
      <div className="flex flex-col items-center justify-center pb-4">
        <Button
          text="👀 Portfolio"
          className={'bg-gold p-3 rounded-full text-navy'}
        />
      </div>

      <div className="flex flex-row space-x-4 justify-evenly">
        <Flipcard
          mainTitle="Personal Website"
          backTitle="Personal Website"
          imgFrontSrc={logo}
          imgFrontAlt="logo"
          imgFrontWidth={flipFirstCardWidth}
          imgFrontHeight={flipFirstCardHeight}
          projectType="Type: Web App"
          techStack='Tech: Next.js, TailwindCSS, React, Typescript'
          shortDescription="SHORT DESCRIPTION"
          classname="class"
          buttonText="button"
          buttonClassName="button"
        />
        <Flipcard
          mainTitle="TITLE"
          backTitle="BACK BACK BACK BACK"
          imgFrontSrc={logo}
          imgFrontAlt="logo"
          imgFrontWidth={flipFirstCardWidth}
          imgFrontHeight={flipFirstCardHeight}
          projectType="Type: project type"
          techStack='Tech: Next.js, TailwindCSS, React, Typescript'
          shortDescription="SHORT DESCRIPTION"
          classname="class"
          buttonText="button"
          buttonClassName="button"
        />
        <Flipcard
          mainTitle="TITLE"
          backTitle="BACK BACK BACK BACK"
          imgFrontSrc={logo}
          imgFrontAlt="logo"
          imgFrontWidth={flipFirstCardWidth}
          imgFrontHeight={flipFirstCardHeight}
          projectType="Type: project type"
          techStack='Tech: Next.js, TailwindCSS, React, Typescript'
          shortDescription="SHORT DESCRIPTION"
          classname="class"
          buttonText="button"
          buttonClassName="button"
        />
        <Flipcard
          mainTitle="TITLE"
          backTitle="BACK BACK BACK BACK"
          imgFrontSrc={logo}
          imgFrontAlt="logo"
          imgFrontWidth={flipFirstCardWidth}
          imgFrontHeight={flipFirstCardHeight}
          projectType="Type: project type"
          techStack='Tech: Next.js, TailwindCSS, React, Typescript'
          shortDescription="SHORT DESCRIPTION"
          classname="class"
          buttonText="button"
          buttonClassName="button"
        />
      </div>
    </div>
  );
}
