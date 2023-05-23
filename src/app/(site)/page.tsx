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
