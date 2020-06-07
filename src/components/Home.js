import React, { Fragment } from 'react';
import { Heading } from './Heading';
import { MemberList } from './MemberList';

export const Home = () => {
  return (
    <Fragment>
      <div className='App'>
        <div className='container mx-auto'>
          <h3 className='text-center  text-3xl mt-20 text-base leading-8 text-black font-bold tracking-wide uppercase'>
            Club membership - build with React
          </h3>
          <Heading />
          <MemberList />
        </div>
      </div>
    </Fragment>
  );
};
