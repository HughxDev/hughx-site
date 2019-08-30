import React from "react";
// import PropTypes from "prop-types";

import TwoColumns from "./two-columns";
import SoftwareCard from "./software-card";
// const githubLogo = ""
import githubLogo from "../images/octicons/mark-github.svg";

const redblueLogo = "/images/logos/redblue.svg";

const Software = () => (
  <article id="software">
    <h2>Software</h2>
    <p>I currently maintain the following software products:</p>
    { /* <h3>Open Source</h3> */ }
    <TwoColumns>
      <SoftwareCard
        name="RedBlue"
        logo={ redblueLogo }
        url="https://redblue.video"
        description={ "Free interactive video player. Add links and forms; build <span style=\"white-space: nowrap;\">choose-your-own-story</span> films." }
        headingLevel="3"
        github={ { "package": "RedBlueVideo/redblue", "showForks": false } }
        npm={ { "package": "redblue" } }
        iconSize="25"
      />
      <SoftwareCard
        name="hvml"
        logo={ githubLogo }
        // url="https://hvml.redblue.video"
        headingLevel="3"
        github={ { "package": "RedBlueVideo/hvml", "showStars": false } }
        npm={ { "package": "hvml" } }
        iconSize="25"
      />
      { /* <SoftwareCard
        name="Hypervideo Markup Language"
        logo={ githubLogo }
        description="Video metadata syntax"
        // url="https://hvml.redblue.video"
        headingLevel="3"
        github={ {} }
        npm={ {} }
        // iconSize="25"
      /> */ }
    </TwoColumns>

    { /* <h3>Commercial</h3>
    <h4>Vlogmaster</h4>
    <p>Lorem ipsum dolor sit amet</p> */ }
  </article>
);

export default Software;
