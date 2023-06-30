import React from "react";
import ArrowDown from "../small-components/ArrowDown";

const HeroSection = () => {
  return (
    <div className='bg-gray-50 h-screen w-full space-y-6'>
      <div className='flex justify-between pt-4'>
        <div className='space-y-1'>
          <div className='space-x-10 border-b border-gray-400'>
            <span className=''>Record type:</span>

            <span className='border border-gray-400 pr-20'>
              Open{" "}
              <span>
                {" "}
                <ArrowDown />
              </span>
            </span>
          </div>
          <div className='space-x-10'>
            <span>Call Number</span>
            <span className='border border-gray-400 pr-20'>00000075555</span>
          </div>
          <div className='space-x-10'>
            <span>Service Type</span>
            <span className='border border-gray-400 pr-20'>M10</span>
          </div>
        </div>
        <div>
          <div>
            <span>Priorty</span>
            <span>Repair / Replace(this is default value)</span>
          </div>
          <div>
            <span>Material code</span>
            <span>
              {" "}
              <ArrowDown />{" "}
            </span>
          </div>
        </div>
      </div>
      {/* This is  2nd section */}
      <div>
        <span>Call status:</span>
        <span>14</span>
        <span>approved</span>
      </div>

      {/* This is 3rd section */}
      <div>
        <h4>Equipment Information:</h4>
        <div>
          <div>
            <span>Equipment Number</span>
            <span>711484515686888</span>
          </div>
          <div>
            <span>General Description</span>
            <span>Order replacement valve</span>
          </div>
        </div>
      </div>
      {/* This is 4rd section */}
      <div className='flex'>
        <div>
          <div>
            <span>item number</span>
            <span>188134846168464641</span>
          </div>
          <div>
            <span>description</span>
            <span>1681351698678465</span>
          </div>
          <div>
            <span>Contract</span>
            <span></span>
          </div>
          <div>
            <span>Contract type</span>
            <span></span>
          </div>
          <div>
            <span>Start / End Date</span>
            <span>00/00/00 || 00/00/00</span>
          </div>
          <div>
            <span>Problem</span>
            <span></span>
          </div>
          <div>
            <span>Cause</span>
            <span></span>
          </div>
          <div>
            <span>Repair</span>
            <span></span>
          </div>
          <div>
            <span>Related to Interbal</span>
          </div>
          <div>
            <span>Cost Center</span>
          </div>
          <div>
            <span>Location</span>
          </div>
          <div>
            <span>Tech ID</span>
          </div>
          <div>
            <span>Terms ID</span>
          </div>
          <div>
            <span>Currency ID</span>
          </div>
        </div>
        <div>{/* customer table will come here */}</div>
        <div>
          <p>Completion Text</p>
          <div>
            <span>Created By ID</span>
            <span>JWilde</span>
          </div>
          <div>
            <span>Created By Name</span>
            <span>JWilde</span>
          </div>
          <div>
            <span>Released by ID</span>
            <span>span</span>
          </div>
          <div>
            <span>Released by Name</span>
            <span>span</span>
          </div>
          <div>
            <span>Released By date</span>
            <span>Date picker</span>
          </div>
          <div>
            <span>Completed By ID</span>
            <span>span</span>
          </div>
          <div>
            <span>Completed by name</span>
            <span>span</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
