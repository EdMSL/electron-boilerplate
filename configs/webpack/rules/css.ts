import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default (resourcesPath: string): webpack.Configuration => {
  function getLoaders(cssOptions) {
    return [
      {
        loader: process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: process.env.NODE_ENV === 'development',
          importLoaders: 2,
          ...cssOptions,
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: process.env.NODE_ENV === 'development',
          sassOptions: {
            outputStyle: 'expanded',
          },
        },
      },
      {
        loader: 'sass-resources-loader',
        options: {
          sourceMap: process.env.NODE_ENV === 'development',
          resources: `${resourcesPath}/**/*.scss`,
        },
      },
    ].filter(Boolean);
  }

  return {
    module: {
      rules: [
        {
          test: /\.s?(c|a)ss$/,
          use: getLoaders({
            modules: true,
          }),
          include: /\.module\.s?(c|a)ss$/,
        },
        {
          test: /\.s?css$/,
          use: getLoaders({
            modules: false,
          }),
          exclude: /\.module\.s?(c|a)ss$/,
        },
      ],
    },
  };
};
