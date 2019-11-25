import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

import FinePrint from "./fine-print";
import ProgressiveImage from "./progressive-image";

const piggyBankImage = "/images/piggy-bank.svg";
const empathyImage = "/images/empathy.svg";
const blueprintsImage = "/images/blueprints.svg";

const Citations = styled.footer`
  font-size: .75rem;
`;

const Article = styled.article`
  // max-width: 43rem;
  // margin-left: auto;
  // margin-right: auto;

  & > section {
    // max-width: 39rem;

    &:nth-child(odd) {
      // margin-left: auto;
      flex-direction: row-reverse;

      & > picture {
        margin-right: auto;
        margin-left: 1.5rem;
      }
    }
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: row;

  & > picture {
    margin-right: 1.5rem;
    width: 50%;
  }

  & > div {
    width: 50%;

    & > p:last-child {
      margin-bottom: 0;
    }
  }
`;

const advantageImageWidth = 200;
const advantageImageStyle = {
  "justifyContent": "center",
  "alignItems": "center",
};

const Advantages = () => (
  <Article id="advantages">
    <h2>The hughx Advantage</h2>
    <Section>
      <ProgressiveImage
        img={ {
          "src": piggyBankImage,
          "width": advantageImageWidth,
          "alt": "icon: piggy bank with coins entering",
        } }
        style={ advantageImageStyle }
      />
      <div>
        <h3>Economical.</h3>
        { /* <p>With traditional app development, the designer spends untold hours on a product mockup. Then the developer has to spend even more hours making it real. The developer often struggles to realize the designer’s vision under real-world constraints. The result not only costs double or triple what it should have, but it increases time-to-market.</p> */ }
        <p>With traditional app development, there are two main phases: design and development.</p>
        <p>First, the designer creates mockups—a series of pictures of what the app will look like. Then the developer translates those pictures into actual code. This duplicates the work of the designer, costing you time and money. Often the designer lacks technical knowledge. At best, this makes the developer’s job harder. At worst this means design revisions. Either way it means more time and more money.</p>
        <p>There’s a better way. As a hybrid designer–developer, I don’t do mockups—only functional prototypes. That way you can <em>feel</em> what the product will be like, rather than just imagine it. And with fewer cooks in the kitchen, you get to launch and iterate faster.</p>
      </div>
    </Section>
    <Section>
      <ProgressiveImage
        img={ {
          "src": empathyImage,
          "width": advantageImageWidth,
          "alt": "icon: face with human figure inside",
        } }
        style={ advantageImageStyle }
      />
      <div>
        <h3>Empathetic.</h3>
        <p>50% of the world’s population isn’t online yet<a id="citation-1" href="#footnote-1"><sup>1</sup></a>, but they soon will be. As this happens, they will largely arrive by way of mobile, not desktop. And not on the iPhone 11, either. More like the Nokia 2—on-par with the iPhone from 2011. This means sites and apps designed for Westerners with the latest tech will break for the rest of the world.</p>
        <p>I believe the Internet should be for everyone. I keep accessibility, performance, and user friendliness top-of-mind at every stage of development. This helps your product reach the broadest possible audience. It’s not just good karma, it’s good business.</p>
      </div>
    </Section>
    <Section>
      { /* <h3>Built to last.</h3> */ }
      <ProgressiveImage
        img={ {
          "src": blueprintsImage,
          "width": advantageImageWidth,
          "alt": "icon: blueprints",
        } }
        style={ advantageImageStyle }
      />
      <div>
        <h3>Engineered.</h3>
        <p>Just because you’re moving fast doesn’t mean you need to sacrifice quality. Today’s MVP is tomorrow’s legacy codebase. Left unpaid, technical debt manifests as bottlenecks. New features start to break old ones. The app slows to a crawl, increasing bounce rate and costing you sales. Current employees get pulled away from product work to help onboard new employees.</p>
        <p>Contracting with hughx is an insurance policy against code rot. Modular functions, unit tests, and detailed documentation all come standard. If your customers don’t thank you, your dev team will.</p>
      </div>
    </Section>
    <FinePrint>
      <small>
        <p id="footnote-1"><sup>1</sup> Source: <a href="https://www.itu.int/en/ITU-D/Statistics/Pages/stat/default.aspx"><cite>Statistics</cite> on ITU</a> <a href="#citation-1" title="Back to citation marker">↩</a></p>
      </small>
    </FinePrint>
  </Article>
);

export default Advantages;
