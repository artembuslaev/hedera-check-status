import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';
const webpack = require("webpack");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

const imagesAssets = new CopyPlugin({
    patterns: [
        {
            from: path.resolve(__dirname, 'src', 'favicon.png'),
            to: 'favicon.png',
        },
        { from: path.resolve(__dirname, 'assets', 'images'), to: 'images' },
    ],
});

export const plugins = [
    new ForkTsCheckerWebpackPlugin({
        logger: 'webpack-infrastructure',
    }),
    imagesAssets,
    new NodePolyfillPlugin()
];
