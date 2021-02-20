import React from "react";
import {turnIntoDate, turnIntoLink} from '../Helpers'

const CoinDetail = (props) => {
  const { profile } = props.details;

  const display = () => {
    return (
      <div className="coinDetail">
        <h3>Coin Profile</h3>
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
          {turnIntoDate(
            profile.economics.launch.initial_distribution.genesis_block_date
          )}
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
