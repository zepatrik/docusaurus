/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

describe('Initial Page', () => {
  it('Docs Link', () => {
    // update port
    cy.visit('/');

    cy.contains('Docs').click();

    cy.url().should('include', '/docs');
  });
  it('Blog Link', () => {
    // update port
    cy.visit('/');

    cy.contains('Blog').click();

    cy.url().should('include', '/blog');
  });
});
