import React from 'react';
import { ClipLoader, PulseLoader } from 'react-spinners';
import LoaderBox from 'components/Loader/styles';

const Loader = () => (
  <LoaderBox>
    <ClipLoader sizeUnit={'px'} size={40} color="#0500FF" loading={true} />
  </LoaderBox>
);

const Spinner = () => (
  <PulseLoader sizeUnit={'px'} size={7.5} color="#0500FF" loading={true} />
);

export { Spinner, Loader as default };
