import fs from 'fs';
import path from 'path';
import { overrideGQLOperations } from '@dropins/build-tools/gql-extend.js';

/**
 * @dropins/build-tools expects fragments.js at node_modules/<pkg>/fragments.js.
 * @manisranjan/* packages ship built assets under dist/, so copy fragments up first.
 * @param {string} packageName
 */
function prepareFragmentsForGqlExtend(packageName) {
  const packageDir = path.join(process.cwd(), 'node_modules', packageName);
  const rootFragments = path.join(packageDir, 'fragments.js');
  const distFragments = path.join(packageDir, 'dist', 'fragments.js');

  if (fs.existsSync(rootFragments) || !fs.existsSync(distFragments)) {
    return;
  }

  fs.copyFileSync(distFragments, rootFragments);
}

/**
 * postinstall.js copies @manisranjan/* from dist/, so sync GQL changes back there.
 * @param {string} packageName
 */
function syncFragmentsToDist(packageName) {
  const packageDir = path.join(process.cwd(), 'node_modules', packageName);
  const rootFragments = path.join(packageDir, 'fragments.js');
  const distFragments = path.join(packageDir, 'dist', 'fragments.js');

  if (fs.existsSync(rootFragments) && fs.existsSync(distFragments)) {
    fs.copyFileSync(rootFragments, distFragments);
  }
}

const manisranjanDropins = [
  '@manisranjan/storefront-cart',
  '@manisranjan/storefront-order',
];

manisranjanDropins.forEach(prepareFragmentsForGqlExtend);

overrideGQLOperations([
  // ACCS does not have Downloadable Items
  {
    npm: '@manisranjan/storefront-cart',
    skipFragments: ['DOWNLOADABLE_CART_ITEMS_FRAGMENT'],
    operations: [],
  },
  {
    npm: '@manisranjan/storefront-order',
    skipFragments: ['DOWNLOADABLE_ORDER_ITEMS_FRAGMENT'],
    operations: [],
  },
  // {
  //   npm: '@dropins/storefront-checkout',
  //   operations: [],
  // },
  // {
  //   npm: '@dropins/storefront-pdp',
  //   operations: [
  //     `
  //     fragment PRODUCT_FRAGMENT on ProductView {
  //       lowStock
  //     }
  //     `,
  //   ],
  // },
]);

manisranjanDropins.forEach(syncFragmentsToDist);
