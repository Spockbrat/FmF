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
          <div className="order-2 lg:order-1 w-full lg:w-1/2">
            <div className="mb-8">
              <p className="text-lg font-bold text-gray-900">About BlendScore</p>
              <p className="mt-4 text-base font-normal leading-6 text-gray-600">
                BlendScore&trade; is the first of its kind credit-like score for corporate
                social responsibility that leverages publicly available information to provide
                key insights to employees, shareholders, and consumers.  
                <br /><br />
                Our real-time scoring system ingests data from enterprise clients and analyzes
                their proxy statements, DEI/CSR reports, EEOC reports, media, benefits, partnerships,
                suppliers, pledges, donations, and social and political activity.
                <br /><br />
                Find My Fit is an application powered by BlendScore&trade; to help employees
                find jobs at companies that align with their values and value their identities.
              </p>
            </div>
            <div className="flex items-center">
              <LogoImage className="w-[85px] md:w-[115px]" />
              <div className="-ml-4">
                {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                  Find My Fit is powered by BlendScore
                </p> */}
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  © {YEAR} {configuration.site.siteName}. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 w-full lg:w-1/2 my-8 lg:my-0">
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
