import React from 'react';
import { addPropsToChildren } from '../helpers/props.js';
import * as basis from '../styles/flex-basis.js';
import * as space from '../styles/spacing.js';
import * as structure from '../styles/structure.js';

type Columns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = 'sm' | 'md' | 'lg';
type JustifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-between';
type AlignItems = 'flex-start' | 'flex-end' | 'center';

const Grid: React.FC<
  {
    children: React.ReactNode;
    container?: Boolean;
    item?: Boolean;
    xs?: Columns;
    sm?: Columns;
    md?: Columns;
    lg?: Columns;
    spacing?: Spacing;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
  } & React.HTMLAttributes<HTMLDivElement>
> = ({
  children,
  container,
  item,
  xs,
  sm,
  md,
  lg,
  spacing,
  justifyContent,
  alignItems,
  ...props
}) => {
  let className = '';

  if (container) {
    className += 'flex flex-wrap';
    if (props.className) className += ` ${props.className}`;
    if (spacing) className += space.margin[spacing];
    if (justifyContent) className += structure.justify[justifyContent];
    if (alignItems) className += structure.align[alignItems];
  }

  if (item) {
    className += 'block';
    if (xs) className += basis.xs[xs];
    if (sm) className += basis.sm[sm];
    if (md) className += basis.md[md];
    if (lg) className += basis.lg[lg];
    if (spacing) className += space.padding[spacing];
  }

  return <div className={className}>{addPropsToChildren(children, { spacing })}</div>;
};

export const Ruler: React.FC<{ spacing: Spacing }> = ({ spacing }) => {
  return (
    <div className={`absolute grid h-screen w-full grid-cols-ruler ${space.gap[spacing]}`}>
      <>
        {[...new Array(12)].map((_, index) => (
          <div key={`ruler-column-${index}`} className='bg-slate-400 opacity-25' />
        ))}
      </>
    </div>
  );
};

export default Grid;
