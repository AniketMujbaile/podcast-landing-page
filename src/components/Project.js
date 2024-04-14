import React from 'react';
import FormEdits from './shortFormEdits';
import TurnsInto from './episodeTurnsInto';
import Edits from './longFormEdits';

const Project = () => {
  return (
    <div>
      <FormEdits />
      <TurnsInto />
      <Edits />
    </div>
  );
};

export default Project;
