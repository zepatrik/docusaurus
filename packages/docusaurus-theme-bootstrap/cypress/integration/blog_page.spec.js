/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const blogPageFactory = require('../support/doc_page.js').default;

describe('Blog Page', () => {
  const BlogPage = blogPageFactory();

  beforeEach(() => {
    BlogPage.navigate();
  });
});
