import React from "react";

const CoinDetail = (props) => {
  const {profile}= props.details
  if(props.details.profile){

    console.log(
      profile
    );
  }
  const display=()=>{
    return (
      <div className="">
        <p>
          Consensus Mechanism:
          {" " +
            profile.economics.consensus_and_emission.consensus
              .general_consensus_mechanism}
        </p>
        <p>Launch Details: {profile.economics.launch.general.launch_details}</p>
        <p>Launch style: {profile.economics.launch.general.launch_style}</p>
        <p>
          Genesis Date:{" "}
          {profile.economics.launch.initial_distribution.genesis_block_date}
        </p>
        <p>
          Initial Supply:{" "}
          {profile.economics.launch.initial_distribution.initial_supply}
        </p>
        <p>
          Background Details:{profile.general.background.background_details}
        </p>
        <p>Project Details: {profile.general.overview.project_details}</p>
        <p>Sector: {profile.general.overview.sector}</p>
        <p>Tagline: {profile.general.overview.tagline}</p>
      </div>
    );
  }
  return (
    <section>
   {
     profile?display():'Loading'
   }
    </section>
  );
};

export default CoinDetail;
