import { graphql, Link, StaticQuery } from 'gatsby';
import * as React from 'react';
import { css } from '@emotion/core';

import config from '../../website-config';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
</style>

const SiteNavLogoStyles = css`
  flex-shrink: 0;
  display: block;
  margin-right: 24px;
  padding: 11px 0;
  color: #fff;
  font-size: 1.7rem;
  line-height: 1em;
  font-weight: bold;
  letter-spacing: -0.5px;
  font-family : Tahoma;
  :hover {
    text-decoration: none;
  }

  img {
    display: block;
    width: auto;
    height: 30px;
  }
`;

interface SiteNavLogoProps {
  logo?: {
    childImageSharp: {
      fixed: any;
    };
  };
}

const SiteNavLogo = () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        logo: file(relativePath: { eq: "img/logoWithTitle.png" }) {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    // tslint:disable-next-line:react-this-binding-issue
    render={(data: SiteNavLogoProps) => (
      <Link className="site-nav-logo" css={SiteNavLogoStyles} to="/">
        {config.title}
      </Link>
    )}
  />
);

export default SiteNavLogo;
