import React from 'react';

export const addPropsToReactElement = (element: React.ReactNode, props: any) => {
  if (React.isValidElement(element)) {
    return React.cloneElement(element, props);
  }
  return element;
};

export const addPropsToChildren = (children: React.ReactNode, props: any) => {
  if (!Array.isArray(children)) {
    return addPropsToReactElement(children, props);
  }
  return children.map((childElement, index) =>
    addPropsToReactElement(childElement, { ...props, key: `item-${index}` }),
  );
};
