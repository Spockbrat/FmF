import Image from 'next/image';

import {
  BuildingLibraryIcon,
  CubeIcon,
  DocumentIcon,
  FireIcon,
  PaintBrushIcon,
  UserGroupIcon,
  UserIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

import Container from '~/core/ui/Container';
import SubHeading from '~/core/ui/SubHeading';
import Button from '~/core/ui/Button';
import Divider from '~/core/ui/Divider';
import Hero from '~/core/ui/Hero';
import Heading from '~/core/ui/Heading';
import SlideUpTransition from '~/core/ui/SlideUpTransition';
import SubscriberFormContainer from './components/SubscriberFormContainer';

export default function Home() {
  return (
    <div>
      <div>
        <Container>
          <SlideUpTransition>
            <div className={
                  'bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24'}>
              <div className={'px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'}>
                <div className={'grid items-left grid-cols-1 gap-12 lg:grid-cols-2'}>
               {/*  <Button variant={'flat'} size={'small'} round>
                  <span className={'flex items-center space-x-2 font-normal'}>
                    <span>Explore BlendScore</span>

                    <ChevronRightIcon className={'h-3'} />
                  </span>
                </Button> */}

               
                  <div>
                    <p className={'text-base font-semibold tracking-wider text-blue-600 uppercase'}>More than a search. An experience</p>
                    <h1 className={'mt-4 text-4xl font-heading text-black lg:mt-8 sm:text-6xl xl:text-8xl'}>Decide where you belong</h1>
                    <p className={'mt-4 text-base text-black lg:mt-8 sm:text-xl'}>Sign up for access</p>
                    <SubscriberFormContainer showFirstName={false} showLastName={false} newsletter={false} />

                    <div className={"flex items-center justify-center mt-12 space-x-6 lg:justify-start sm:space-x-8 delay-75"}>
                        <div className={"flex items-center"}>
                            <p className={"text-3xl font-medium text-gray-900 sm:text-4xl font-pj"}>200</p>
                            <p className={"ml-3 text-sm text-gray-900 font-pj"}>Top<br />Companies</p>
                        </div>

                        <div className={"hidden sm:block"}>
                            <svg className={"text-gray-400"} width="16" height="39" viewBox="0 0 16 39" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975"></line>
                                <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398"></line>
                                <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584"></line>
                                <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584"></line>
                                <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584"></line>
                            </svg>
                        </div>

                        <div className={"flex items-center"}>
                            <p className={"text-3xl font-medium text-gray-900 sm:text-4xl font-pj"}>30k</p>
                            <p className={"ml-3 text-sm text-gray-900 font-pj"}>Data<br />Points</p>
                        </div>
                    </div>
               
                  </div>

                <div>
                    <img className={'w-full'} src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="" />
                </div>
                
                </div>
              </div>
            </div>

          
          </SlideUpTransition>
        </Container>

        <Divider />

        <Container>
         
           
        </Container>
      </div>
    </div>
  );
}

function HeroTitle({ children }: React.PropsWithChildren) {
  return (
    <h1
      className={
        'text-center text-4xl text-black-500 dark:text-white md:text-5xl' +
        ' flex flex-col space-y-1 font-heading font-medium xl:text-7xl'
      }
    >
      {children}
    </h1>
  );
}

function FeatureIcon(props: React.PropsWithChildren) {
  return (
    <div className={'flex justify-center'}>
      <div
        className={'rounded-xl bg-primary-500/10 p-4 dark:bg-primary-500/10'}
      >
        {props.children}
      </div>
    </div>
  );
}
