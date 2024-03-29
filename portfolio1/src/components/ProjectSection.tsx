import ProjectCard from '@/components/ProjectCard';
import logo from '/public/logo.png';
import Button from '@/components/Button';

export default function ProjectSection() {
  let firstCardAltText = 'random';
  let firstCardText = 'checking in';
  let firstCardTitle = 'title';
  let firstButtonText = 'More';
  let buttonText = '👀 All Projects';
  let webDesignation = 'web app or web site';

  return (
    <div className="min-h-screen h-full px-20 py-8">
      <h1 className="text-6xl text-center font-subs font-extrabold italic pb-10">
        Recent Projects
      </h1>
      <div className="flex flex-col items-center justify-center pb-4">
        <Button text={buttonText} className={'bg-purple p-2 rounded-full'} />
      </div>

      <div className="flex flex-row space-x-4 justify-evenly">
        <ProjectCard
          image={logo}
          alt={firstCardAltText}
          cardText={firstCardText}
          cardTitle={firstCardTitle}
          buttonText={firstButtonText}
          webDesignation={webDesignation}
        />
        <ProjectCard
          image={logo}
          alt={firstCardAltText}
          cardText={firstCardText}
          cardTitle={firstCardTitle}
          buttonText={firstButtonText}
          webDesignation={webDesignation}
        />
        <ProjectCard
          image={logo}
          alt={firstCardAltText}
          cardText={firstCardText}
          cardTitle={firstCardTitle}
          buttonText={firstButtonText}
          webDesignation={webDesignation}
        />
      </div>
    </div>
  );
}
