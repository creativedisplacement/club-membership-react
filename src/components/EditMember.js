import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useHistory, Link } from 'react-router-dom';

export const EditMember = (route) => {
  let history = useHistory();
  const { members, editMember } = useContext(GlobalContext);
  const [selectedMember, setSeletedMember] = useState({
    id: null,
    memberName: '',
    memberBio: '',
    memberAge: '',
  });
  const currentMemberId = route.match.params.id;
  useEffect(() => {
    const memberId = currentMemberId;
    const selectedMember = members.find(
      (member) => member.id === parseInt(memberId)
    );

    console.log(selectedMember);
    setSeletedMember(selectedMember);
  }, [currentMemberId, members]);

  const onSubmit = (e) => {
    e.preventDefault();
    editMember(selectedMember);
    history.push('/');
  };

  const handleOnChange = (memberKey, value) =>
    setSeletedMember({ ...selectedMember, [memberKey]: value });

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
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline'
              value={selectedMember.memberName}
              onChange={(e) => handleOnChange('memberName', e.target.value)}
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
              value={selectedMember.memberBio}
              onChange={(e) => handleOnChange('memberBio', e.target.value)}
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
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline'
              value={selectedMember.memberAge}
              onChange={(e) => handleOnChange('memberAge', e.target.value)}
              type='number'
              placeholder='Enter member age'
            />
          </div>
          <div className='flex items-center justify-between'>
            <button className='block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline'>
              Edit Member
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
