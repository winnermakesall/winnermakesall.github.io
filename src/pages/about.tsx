import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';
import * as Logo from '../logo.png';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
              I'm not a big fan of the the saying  "winner takes all".              <br /> <br />

               It puts the emphasis on the <b>wrong part of the equation. </b>

In the current day, even if a business is able to deliver quick wins, its reign is not uncontested. It needs to continuously strive for better products and deliver them with exceptional strategy.


For winners, the focus is on making, on creation, not on taking.  <br /> <br />


Thats what we do here at Winner Makes All. We focus on that creation aspect. We break down the products and strategies of today's tech companies and we explore their most challenging business problems.

<br /> <br />
Thanks so much for stopping by. I hope you enjoy reading through our posts and learn something new! <br />
<hr />
Rishub Nahar <br/>
Editor, Winner Makes All



<br /> <br />
We are always on the lookout for curious minds interested in technology strategy and product. If you'd like to write with us, shoot us a note at hello@winnermakesall.com
              </p>


            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
