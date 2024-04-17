/**
 * Copyright 2024 Whatssub Co., Ltd. All rights reserved.
 *
 * This source code is licensed under the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');

const pak = require('../package.json');

module.exports = {
  dependencies: {
    [pak.name]: {
      root: path.join(__dirname, '..'),
    },
  },
};
