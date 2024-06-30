import logo from '/public/logo.png';
import nextjs from '/public/tech-stack-logos/nextdotjs.svg'
import ts from '/public/tech-stack-logos/ts.svg'
import tailwindcss from '/public/tech-stack-logos/tailwindcss.svg'
import Button from '@/components/Button';
import Flipcard from '../components/FlipCard';

export default function ProjectSection() {
  const flipCardImageWidth = 200;
  const flipCardImageHeight = 50;

  return (
    <div className="min-h-screen h-full px-20 py-10 bg-creme">
      <h1 className="text-6xl text-center font-poppins pb-10 text-navy">PROJECTS</h1>
      <div className="flex flex-col items-center justify-center pb-4">
        <Button
          text="👀 Portfolio"
          className={'bg-gold p-3 rounded-full text-navy'}
        />
      </div>
      <div className="flex flex-row space-x-4 justify-evenly">
        <Flipcard
          frontTitle="Personal Website"
          backTitle="Personal Website"
          imgSrc={logo}
          imgAlt="logo"
          imgWidth={flipCardImageWidth}
          imgHeight={flipCardImageHeight}
          projectType="Type: Web App"
          buttonTypeClassName="button"
          techStackIconsImageSrc={nextjs}
          techStackIconsImageAlt='nextjs logo'
          techStackIconsImageWidth={16}
          techStackIconsImageHeight={16}
          techStackIconsImageSrc2={ts}
          techStackIconsImageAlt2='typescript logo'
          techStackIconsImageWidth2={16}
          techStackIconsImageHeight2={16}
          techStackIconsImageSrc3={tailwindcss}
          techStackIconsImageAlt3='tailwindcss logo'
          techStackIconsImageWidth3={16}
          techStackIconsImageHeight3={16}
          shortDescription="SHORT DESCRIPTION"
          buttonProjectText="button"
          buttonCodeText='View Code'
        />
        <Flipcard
          frontTitle="Personal Website"
          backTitle="Personal Website"
          imgSrc={logo}
          imgAlt="logo"
          imgWidth={flipCardImageWidth}
          imgHeight={flipCardImageHeight}
          projectType="Type: Web App"
          buttonTypeClassName="button"
          techStackIconsImageSrc={nextjs}
          techStackIconsImageAlt='nextjs logo'
          techStackIconsImageWidth={16}
          techStackIconsImageHeight={16}
          techStackIconsImageSrc2={ts}
          techStackIconsImageAlt2='typescript logo'
          techStackIconsImageWidth2={16}
          techStackIconsImageHeight2={16}
          techStackIconsImageSrc3={tailwindcss}
          techStackIconsImageAlt3='tailwindcss logo'
          techStackIconsImageWidth3={16}
          techStackIconsImageHeight3={16}
          shortDescription="SHORT DESCRIPTION"
          buttonProjectText="button"
          buttonCodeText='View Code'
        />
        <Flipcard
          frontTitle="Personal Website"
          backTitle="Personal Website"
          imgSrc={logo}
          imgAlt="logo"
          imgWidth={flipCardImageWidth}
          imgHeight={flipCardImageHeight}
          projectType="Type: Web App"
          buttonTypeClassName="button"
          techStackIconsImageSrc={nextjs}
          techStackIconsImageAlt='nextjs logo'
          techStackIconsImageWidth={16}
          techStackIconsImageHeight={16}
          techStackIconsImageSrc2={ts}
          techStackIconsImageAlt2='typescript logo'
          techStackIconsImageWidth2={16}
          techStackIconsImageHeight2={16}
          techStackIconsImageSrc3={tailwindcss}
          techStackIconsImageAlt3='tailwindcss logo'
          techStackIconsImageWidth3={16}
          techStackIconsImageHeight3={16}
          shortDescription="SHORT DESCRIPTION"
          buttonProjectText="button"
          buttonCodeText='View Code'
        />
        
      </div>
    </div>
  );
}
