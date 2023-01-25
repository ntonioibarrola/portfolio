const tw = (...classes: (false | null | undefined | string)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export default tw;
