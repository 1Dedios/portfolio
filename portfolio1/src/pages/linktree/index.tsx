import Image from 'next/image';
import logo from '../../../public/dedios_logo.png';
import Button from '../../components/Button';
import {
  UilGithubAlt,
  UilLinkedinAlt,
  UilDiscord,
  UilLocationPinAlt,
} from '@iconscout/react-unicons';

export default function LinkTree() {
  // current link tree - https://linktr.ee/Dedios
  // TODO: bg ideally something animated
  // TODO: full stack software engineer - add typed so it can change this behavior
  return (
    <>
      <div>
        {/**parent div for the whole page */}
        <div>
          <Image src={logo} alt="logo" height={104} width={104} />
          <h1>Dedios</h1>
          <p>bible verse</p>
          <div>
            {/**LOCATION DIV */}
            <UilLocationPinAlt />
            <p>East Coast</p>
          </div>
          <h1>Full Stack Software Engineer</h1>
        </div>
        <div>
          <h1>div for social icons</h1>
          <UilGithubAlt />
          <UilLinkedinAlt />
          <UilDiscord />
        </div>
        <div>
          <h1>div containing links</h1>
          <Button text="a button" className="text-2xl text-center" />
        </div>
      </div>
    </>
  );
}
