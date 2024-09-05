import Image from 'next/image';
import logo from '../../../public/watermelon_me_bitmoji.png';
import Button from '../../components/Button';
import {
  UilGithubAlt,
  UilLinkedinAlt,
  UilDiscord,
  UilLocationPinAlt,
} from '@iconscout/react-unicons';

export default function LinkTree() {
  // current link tree - https://linktr.ee/Dedios
  return (
    <>
      <main>
        {/**parent div for the whole page */}
        <div className="flex flex-col items-center h-screen text-center">
          <div>
            <div className="flex flex-col items-center avatar mt-20 mb-6">
              <div className="ring-creme ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <Image src={logo} alt="logo" height={104} width={104} />
              </div>
              {/* TODO: add blinking cursor at the end of name */}
              <h1 className="mt-4">
                <span className="text-lime-400">$~ </span>Dedios
              </h1>
              <p className="italic text-sm">ECC 11:2</p>
            </div>
            <h1>Tinkerer of Technology</h1>
            <div className="flex flex-row justify-center space-x-1">
              <UilLocationPinAlt />
              <p>echo $HOME</p>
            </div>
          </div>
          <div className="flex flex-col space-y-4 mt-6 text-sm">
            <Button
              text="Dev Hardware Setup"
              className="text-center glass rounded-lg pt-4 pb-4 pr-10 pl-10"
            />
            <Button
              text="My Site"
              className="text-center glass rounded-lg pt-4 pb-4 pr-10 pl-10"
            />
          </div>
          <div className="flex flex-row justify-center space-x-4 mt-6">
            <UilGithubAlt />
            <UilLinkedinAlt />
            <UilDiscord />
          </div>
        </div>
      </main>
    </>
  );
}
