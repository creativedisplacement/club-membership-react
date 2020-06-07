import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const AddMember = () => {
  const [memberName, setMemberName] = useState('');
  const [memberBio, setMemberBio] = useState('');
  const [memberAge, setMemberAge] = useState('');
  const { addMember, members } = useContext(GlobalContext);
  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newMember = {
      id: members.length + 1,
      memberName,
      memberBio,
      memberAge,
    };
    addMember(newMember);
    history.push('/');
  };

  return (
    <Fragment>
      <div className='w-full max-w-sm container mt-20 mx-auto'>
        <form onSubmit={onSubmit}>
          <div className='w-full mb-5'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='memberName'
            >
              Name of member
            </label>
            <input
              name='memberName'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600'
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
              type='text'
              placeholder='Enter member name'
            />
          </div>
          <div className='w-full  mb-5'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='memberBio'
            >
              Member biography
            </label>
            <input
              name='memberBio'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline'
              value={memberBio}
              onChange={(e) => setMemberBio(e.target.value)}
              type='text'
              placeholder='Enter member biography'
            />
          </div>
          <div className='w-full  mb-5'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='memberAge'
            >
              Age
            </label>
            <input
              name='memberAge'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600'
              value={memberAge}
              onChange={(e) => setMemberAge(e.target.value)}
              type='number'
              placeholder='Enter member age'
            />
          </div>
          <div className='flex items-center justify-between'>
            <button className='mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
              Add Member
            </button>
          </div>
          <div className='text-center mt-4 text-gray-500'>
            <Link to='/'>Cancel</Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};
