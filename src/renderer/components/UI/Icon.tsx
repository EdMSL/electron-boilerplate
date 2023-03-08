import React, { memo } from 'react';
import cn from 'classnames';
import styles from './Icon.module.scss';

interface IProps {
  icon: string,
  className?: string,
  size?: number | [number, number],
}

const DEFAULT_SVG_SIZE = 24;

export const Icon: React.FunctionComponent<IProps> = memo(({
  icon,
  className = '',
  size = DEFAULT_SVG_SIZE,
}) => (
  <svg
    className={cn(styles.icon, icon === 'unknown' ? 'hide' : className)}
    width={Array.isArray(size) ? size[0] : size}
    height={Array.isArray(size) ? size[1] : size}
  >
    {/* // svg sprite generates automaticaly by svgspritemap plugin */}
    <use xlinkHref={`${'images/sprite.svg'}#icon-${icon}`} />
  </svg>
));
