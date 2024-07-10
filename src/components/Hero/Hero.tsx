"use client"
import { Avatar } from '@nextui-org/react';
import Image from 'next/image';
import {format} from 'date-fns';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const data = [
	{
		image: 'https://media.graphassets.com/MxJZhmooRRuudoErkQ38',
		title: 'Technical SEO with Hygraph',
		exerpt: 'Get started with your SEO implementation when using a Headless CMS',
		author: {
			name: 'Samar Badriddinov',
			image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
		},
	},
	{
		image: 'https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h',
		title: 'Union Types and Sortable Relations with Hygraph',
		exerpt: 'Learn more about Polymorphic Relations and Sortable Relations with Hygraph',
		author: {
			name: 'Samar Badriddinov',
			image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
		},
	},
];

export const Hero = () => {
  
  return (
    <div className='w-full h-[30vh]'>
      <Carousel responsive={responsive}>
        {data.map((item, index) => {
          return (
            <div key={index} className='relative w-full h-[70vh]'>
              <Image className='w-full object-cover h-full' src={item.image} alt={item.title} fill/>
              <div className='absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-black/30'></div>

              <div className='text-white w-2/3 z-[999999] relative top-1/2 -translate-y-1/2 pl-12'>
                <h2 className='text-7xl'>{item.title}</h2>
                <h5 className='text-3xl mb-6'>{item.exerpt}</h5>
                <div className="flex gap-4 items-center ">
                  <Avatar isBordered color="primary" src={item.image} />
                  <div>
                    <p>{item.author.name}</p>
                    <p>{format(new Date(), 'dd MMM, yy')} &#x2022; 10min read</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
