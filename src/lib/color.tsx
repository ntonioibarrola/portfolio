type HexColor = string & { __brand: 'HexColor' };

const isHex = (value: string): value is HexColor => {
  const regex = /^#(([A-F0-9]{2}){3,4}|[A-F0-9]{3})$/i;
  return regex.test(value);
};

export default isHex;
