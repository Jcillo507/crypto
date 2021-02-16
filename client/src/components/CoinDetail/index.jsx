import React from "react";

const CoinDetail = (props) => {
  const { profile } = props.details;
  const turnIntoLink = (text) => {
    const urlFilter = /\[([^\][]*)]\(((?:https?|ftps?|file):\/\/[^()]*)\)/gi;
    return text.replace(urlFilter, '<a href="$2">$1</a>');
  };
  const turnIntoDate = (text)=>{
    const rawDate= text.substring(0, text.length - 10)
    const formattedDate = rawDate.substr(5) + "-"+rawDate.substr(0,4)
    return formattedDate
  }
  const display = () => {
    return (
      <div className="">
        <p>Sector: {profile.general.overview.sector}</p>
        <p>Tagline: {profile.general.overview.tagline}</p>
        <div>
          Project Details:
          <span
            dangerouslySetInnerHTML={{
              __html: turnIntoLink(profile.general.overview.project_details),
            }}
          ></span>
        </div>
        <p>
          Genesis Date:{" "}
          {turnIntoDate(profile.economics.launch.initial_distribution.genesis_block_date)}
        </p>
        <p>
          Initial Supply:{" "}
          {profile.economics.launch.initial_distribution.initial_supply}
        </p>
        <p>
          Consensus Mechanism:
          {" " +
            profile.economics.consensus_and_emission.consensus
              .general_consensus_mechanism}
        </p>
        <p>
          Launch style:
          {profile.economics.launch.general.launch_style}
        </p>
        <p>
          Launch Details:{" "}
          <span
            dangerouslySetInnerHTML={{
              __html: turnIntoLink(
                profile.economics.launch.general.launch_details
              ),
            }}
          ></span>
        </p>
        <p>
          Background Details:
          <span
            dangerouslySetInnerHTML={{
              __html: turnIntoLink(
                profile.general.background.background_details
              ),
            }}
          ></span>
        </p>
      </div>
    );
  };
  return <section>{profile ? display() : "Loading"}</section>;
};

export default CoinDetail;
