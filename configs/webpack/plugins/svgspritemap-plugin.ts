import SVGSpritemapPlugin from 'svg-spritemap-webpack-plugin';

const fileName = 'images/sprite.svg';

export default (path: string) => {
  if (process.env.NODE_ENV === 'production') {
    return new SVGSpritemapPlugin(`${path.replace(/\\/g, '/')}/**/*.svg`, {
      output: {
        filename: fileName,
        chunk: {
          keep: true,
        },
        svg4everybody: false,
        svgo: {
          removeComments: true,
          removeXMLProcInst: true,
        },
      },
      sprite: {
        prefix: 'icon-',
        generate: {
          title: false,
        },
      },
    });
  }

  return new SVGSpritemapPlugin(`${path.replace(/\\/g, '/')}/**/*.svg`, {
    output: {
      filename: fileName,
      svg4everybody: false,
    },
    sprite: {
      prefix: 'icon-',
    },
  });
};
