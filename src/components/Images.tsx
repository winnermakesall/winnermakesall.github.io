import { Link } from 'gatsby';
import { setLightness } from 'polished';
import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { colors } from '../styles/colors';
import { outer, inner } from '../styles/shared';
import config from '../website-config';


const smallImage: React.FunctionComponent = () => {
  return (
    <img src = {props.path} />
  );
};

export default smallImage;
