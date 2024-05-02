import React from 'react'

const AboutDesign = ({number}) => {
  return (
    <div className="w-auto flex itmes-center gap-3">
      <div className="flex justify-center text-white w-12 rounded-full p-2 bg-brown">
        {number}
      </div>
      <div className="my-auto border-t-2 w-full border-brown"></div>
    </div>
  );
}

export default AboutDesign
