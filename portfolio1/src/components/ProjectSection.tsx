import ProjectCard from '@/components/ProjectCard';
import logo from '/public/logo.png';
import dedios from '/public/next.svg';
import Button from '@/components/Button';
import Flipcard from '../components/FlipCard';

export default function ProjectSection() {
  let firstCardAltText = 'random';
  let firstCardText = 'checking in';
  let firstCardTitle = 'title';
  let firstButtonText = 'More';
  let buttonText = '👀 All Projects';
  let webDesignation = 'web app or web site';
  let flipFirstCardHeight = 200;

  return (
    <div className="min-h-screen h-full px-20 py-8">
      <h1 className="text-6xl text-center font-subs font-extrabold italic pb-10">
        Projects
      </h1>
      <div className="flex flex-col items-center justify-center pb-4">
        <Button text={buttonText} className={'bg-purple p-2 rounded-full'} />
      </div>

      <div className="flex flex-row space-x-4 justify-evenly">
        <Flipcard
          mainTitle="FRONT"
          backTitle="BACK BACK BACK BACK"
          subTitle="SUBTITLE"
          imgFrontSrc={logo}
          imgFrontAlt="logo"
          imgFrontWidth={flipFirstCardHeight}
          imgFrontHeight={flipFirstCardHeight}
          projectType="project type"
          shortDescription="SHORT DESCRIPTION"
          classname="class"
          buttonText="button"
          buttonClassName="button"
        />
        <Flipcard
          mainTitle="FRONT"
          backTitle="BACK BACK BACK BACK"
          subTitle="SUBTITLE"
          imgFrontSrc={logo}
          imgFrontAlt="logo"
          imgFrontWidth={flipFirstCardHeight}
          imgFrontHeight={flipFirstCardHeight}
          projectType="project type"
          shortDescription="SHORT DESCRIPTION"
          classname="class"
          buttonText="button"
          buttonClassName="button"
        />
        <Flipcard
          mainTitle="FRONT"
          backTitle="BACK BACK BACK BACK"
          subTitle="SUBTITLE"
          imgFrontSrc={logo}
          imgFrontAlt="logo"
          imgFrontWidth={flipFirstCardHeight}
          imgFrontHeight={flipFirstCardHeight}
          projectType="project type"
          shortDescription="SHORT DESCRIPTION"
          classname="class"
          buttonText="button"
          buttonClassName="button"
        />
        <Flipcard
          mainTitle="FRONT"
          backTitle="BACK BACK BACK BACK"
          subTitle="SUBTITLE"
          imgFrontSrc={logo}
          imgFrontAlt="logo"
          imgFrontWidth={flipFirstCardHeight}
          imgFrontHeight={flipFirstCardHeight}
          projectType="project type"
          shortDescription="SHORT DESCRIPTION"
          classname="class"
          buttonText="button"
          buttonClassName="button"
        />
      </div>
    </div>
  );
}
