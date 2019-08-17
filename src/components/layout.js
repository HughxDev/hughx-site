/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

import layout from "../util/layout";

const Layout = ( { children } ) => {
  const data = useStaticQuery( graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  ` );

  return (
    <>
      <Header siteTitle={ data.site.siteMetadata.title } />
      { children }
      <footer style={ {
        "textAlign": "center",
        // "marginTop": "3rem",
        "padding": `1.5rem ${layout.pageGutter}`,
        "backgroundColor": "#aaa",
      } }>
        © { new Date().getFullYear() }, Built with
        { " " }
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  "children": PropTypes.node.isRequired,
};

export default Layout;
