import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import TwoColumns from "./two-columns";
import FinePrint from "./fine-print";
import ProgressiveImage from "./progressive-image";

const Incl = () => <abbr title="including" style={ { "borderBottom": 0 } }>incl.</abbr>;

const ServiceList = styled.ul`
  list-style: none;
  margin-left: 0;
  margin-bottom: 0;

  & > li {
    height: 50px;
    margin: 1.125rem 0;
    display: flex;
    align-items: center;
    justify-content: left;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ServiceLogo = ( {
  src, alt, width, height, style, containerStyle,
} ) => (
  <ProgressiveImage
    img={ {
      src,
      "alt": ( alt || "" ),
      "width": ( width || 50 ),
      "height": ( height || 50 ),
      style,
      "loading": "lazy",
    } }
    style={ {
      "display": "inline-block",
      "verticalAlign": "middle",
      "maxHeight": "50px",
      // "filter": "contrast(3) grayscale(1)",
      ...containerStyle,
    } }
  />
);

ServiceLogo.propTypes = {
  "src": PropTypes.string,
  "width": PropTypes.number,
  "style": PropTypes.object,
  "containerStyle": PropTypes.object,
};

const logoDirectory = "/images/logos";
const frameworkNames = {
  "sass": "SASS",
  "less": "Less",
  "styled-components": "styled-components",
  "es6plus": "ES6+",
  "nodejs": "Node.js",
  "react": "React",
  "redux": "Redux",
  "vue": "Vue",
  "angular": "Angular",
  "wordpress": "WordPress",
  "contextApi": "Context",
  "hooks": "Hooks",
};
const logos = {
  "_showFrameworks": true,
  "_showFrameworkLogos": false,
  "_showFrameworkNames": true,
  "development": {
    "html-icon": {
      "name": "HTML5, CSS3, &amp; JavaScript (ES6+)",
      "height": 57,
      "monochrome": true,
    },
    // "css--addon": {
    //   "name": "CSS3",
    //   "frameworks": [
    //     "sass",
    //     // "less",
    //     "styled-components",
    //   ],
    // },
    // "javascript": {
    //   "name": "JavaScript (ES6+)",
    //   "frameworks": [
    //     // "es6plus",
    //     "nodejs",
    //     "react",
    //     // "redux",
    //     // "vue",
    //     // "angular",
    //   ],
    //   // "containerStyle": {
    //   //   "filter": "contrast(3) grayscale(1) invert(1)",
    //   // },
    //   "monochrome": true,
    // },
    "react": {
      "name": "React",
      "height": 44,
      "monochrome": true,
      "frameworks": [
        "redux",
        "contextApi",
        "hooks",
      ],
    },
    "nodejs-icon": {
      "name": "Node.js",
      "height": 58,
      "monochrome": true,
    },
    // "php-alt": {
    //   "name": "PHP",
    //   // "frameworks": ["wordpress"],
    //   "monochrome": true,
    // },
    "gatsby": {
      "name": "Gatsby",
      "monochrome": true,
    },
    "wordpress": {
      "name": "WordPress",
      "monochrome": true,
    },
    "shopify": {
      "name": "Shopify",
      "height": 57,
      "monochrome": true,
    },
    "seo-performance": {
      "name": "SEO<sup>1</sup> & Performance",
      "height": 52,
      "monochrome": true,
      "containerStyle": {
        "marginTop": ".25rem",
      },
    },
  },
  "design": {
    "ui-ux": {
      "name": "<abbr title=\"User Interface\">UI</abbr>/<abbr title=\"User Experience\">UX</abbr> (Look &amp; Feel)",
      "height": 37,
    },
    "ia": {
      "name": "Information Architecture",
      "height": 39,
    },
    "component": {
      "name": "Components & Design Systems",
      "height": 43,
    },
    "u7y-a11y": {
      "name": "Usability/Accessibility",
    },
    "copyediting": {
      "name": "Copyediting",
      "height": 49,
    },
    "logos-brand-identity": {
      "name": "Logos &amp; Brand Identity",
      "height": 40,
    },
    "responsive-design": {
      "name": "Responsive Design",
    },
  },
};

const getListOfServices = ( designOrDevelopment ) => (
  <ServiceList>{
  Object.keys( logos[designOrDevelopment] )
    .filter( ( key ) => key.indexOf( "_" ) === -1 )
    .map( ( key ) => {
      const logo = logos[designOrDevelopment][key];
      const shouldShowFrameworks = (
        logos._showFrameworks
        && logo.frameworks
        && logo.frameworks.length
      );
      const shouldShowFrameworkLogos = logos._showFrameworkLogos;
      const shouldShowFrameworkNames = logos._showFrameworkNames;
      const svg = "svg";

      return (
        <li
          key={ key }
          // style={ { "marginBottom": "1.5rem" } }
        >
          <ServiceLogo
            height={ logo.height }
            src={ `${logoDirectory}/${key}${logo.monochrome ? "--monochrome" : ""}.${svg}` }
            containerStyle={ {
              "marginRight": ".5rem",
              ...logo.containerStyle,
            } }
            alt={ logo.alt }
          />&#32;
          <span style={ { "lineHeight": 1.25 } }>
            <span dangerouslySetInnerHTML={ { "__html": logo.name } } />
            {
              shouldShowFrameworks
              && <>
                &#32;—&#32;<Incl />&#32;{
                logo.frameworks.map( ( framework, index ) => {
                  const isNotLastFramework = (
                    logos._showFrameworkNames
                    && ( index < ( logo.frameworks.length - 2 ) )
                  );
                  const isLastFramework = (
                    logos._showFrameworkNames
                    && ( index === ( logo.frameworks.length - 2 ) )
                  );

                  return <React.Fragment key={ framework }>
                    {
                      shouldShowFrameworkLogos
                      && <>
                        <ServiceLogo
                          src={ `${logoDirectory}/${framework}.${svg}` }
                          containerStyle={ framework.containerStyle }
                        />&#32;
                      </>
                    }
                    { shouldShowFrameworkNames && frameworkNames[framework] }
                    { isNotLastFramework && ", " }
                    { isLastFramework && ", & " }
                  </React.Fragment>;
                } ) }
              </>
            }
          </span>
        </li>
      );
    } )
  }</ServiceList>
);

const Services = () => (
  <article id="services">
    <h2>Services</h2>
    <p>I offer experise in the following areas:</p>
    <TwoColumns>
      <section>
        <h3>Development</h3>
        { getListOfServices( "development" ) }
      </section>
      <section>
        <h3>Design</h3>
        { getListOfServices( "design" ) }
      </section>
    </TwoColumns>
    <FinePrint>
      <small><sup>1</sup> Best practices only. I do not guarantee search engine ranking.</small>
    </FinePrint>
  </article>
);

export default Services;
