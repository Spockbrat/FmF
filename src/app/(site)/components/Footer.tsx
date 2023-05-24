import Link from 'next/link';

import Container from '~/core/ui/Container';
import LogoImage from '~/core/ui/Logo/LogoImage';
import configuration from '~/configuration';
import Heading from '~/core/ui/Heading';
import SubscriberFormContainer from './SubscriberFormContainer';

const YEAR = new Date().getFullYear();

function Footer() {
  return (
<footer className="py-8 lg:py-24">
  <Container>
    <div className="flex flex-col lg:flex-row justify-between items-start lg:space-x-12">
      <div className="flex flex-col items-start lg:w-1/2 lg:max-w-[45%]">
        <div className="mb-8">
          <p className="text-lg font-bold text-gray-900">About BlendScore</p>
          <p className="mt-4 text-base font-normal leading-6 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. 
            Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>
        </div>
        <div className="flex items-center">
          <LogoImage className="w-[85px] md:w-[115px]" />
          <div className="-ml-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Find My Fit is powered by BlendScore
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © {YEAR} {configuration.site.siteName}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start mt-8 lg:mt-0 lg:max-w-[50%]">
        <div className="mb-4">
          <p className="text-lg font-bold text-gray-900">Stay informed</p>
          <p className="mt-4 text-base font-normal leading-7 text-gray-500">
            We will keep you in the know about all things Find My Fit and BlendScore.
          </p>
        </div>
        <SubscriberFormContainer
          showFirstName={true}
          showLastName={true}
          newsletter={true}
        />
      </div>
    </div>
  </Container>
</footer>



  );
}

function FooterSectionList(props: React.PropsWithChildren) {
  return (
    <ul className={'flex flex-col space-y-4 text-gray-500 dark:text-gray-400'}>
      {props.children}
    </ul>
  );
}

function FooterLink(props: React.PropsWithChildren) {
  return (
    <li
      className={
        'text-sm [&>a]:transition-colors [&>a]:hover:text-gray-800' +
        ' dark:[&>a]:hover:text-white'
      }
    >
      {props.children}
    </li>
  );
}

export default Footer;
