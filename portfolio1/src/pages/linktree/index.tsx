import Image from 'next/image';
import logo from '../../../public/dedios_logo.png';

export default function LinkTree() {
  // current link tree - https://linktr.ee/Dedios
  // TODO: bg ideally something animated
  // TODO: full stack software engineer - add typed so it can change this behavior
  // TODO: social icons - linkedin, github, discord
  return (
    <>
      <div>
        {/**parent div for the whole page */}
        <div>
          <Image src={logo} alt="logo" height={104} width={104} />
          <h1>Dedios</h1>
          <p>bible verse</p>
          <h1>Full Stack Software Engineer</h1>
          <p>East Coast Engineer</p>
        </div>
        <div>
          <h1>div for social icons</h1>
        </div>
        <div>
          <h1>div containing links</h1>
        </div>
      </div>
    </>
  );
}
