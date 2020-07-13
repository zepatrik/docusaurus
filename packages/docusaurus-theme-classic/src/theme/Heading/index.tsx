/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid */

import React, {ComponentType} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import './styles.css';
import styles from './styles.module.css';
import useLocationHash from '../hooks/useLocationHash';

const Heading = (Tag: ComponentType): ((props) => JSX.Element) =>
  function TargetComponent({id, ...props}) {
    const {
      siteConfig: {
        themeConfig: {navbar: {hideOnScroll = false} = {}} = {},
      } = {},
    } = useDocusaurusContext();
    const [hash] = useLocationHash(window.location.hash)

    if (!id) {
      return <Tag {...props} />;
    }

    return (
      <Tag {...props} className={clsx(props.className, {
        // window.location.hash starts with '#'
        'anchor-active': id === hash.slice(1)})}>
        <a
          aria-hidden="true"
          tabIndex={-1}
          className={clsx('anchor', {
            [styles.enhancedAnchor]: !hideOnScroll,
          })}
          id={id}
        />
        {props.children}
        <a
          aria-hidden="true"
          tabIndex={-1}
          className="hash-link"
          href={`#${id}`}
          title="Direct link to heading">
          #
        </a>
      </Tag>
    );
  };

export default Heading;
