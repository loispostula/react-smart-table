/**
 Copyright (C) 03/01/17  Loïs Postula
 */
import 'babel-polyfill'
const tests = require.context('.', true, /\.test\.(js|jsx)$/)
tests.keys().foreach(tests)
