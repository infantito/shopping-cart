import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import LoaderBox from 'components/Loader/styles';

const Loader = () => (
  <LoaderBox>
    <ClipLoader sizeUnit={'px'} size={40} color="#0500FF" loading={true} />
  </LoaderBox>
);

export default Loader;
