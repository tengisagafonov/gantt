export const priceSeparator = (price: string | number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' ₮';
};

export const opacityColor = (hex: string, opacity: number) => {
  let c: string[] | string;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = `0x${c.join('')}`;
    return `rgba(${[(+c >> 16) & 255, (+c >> 8) & 255, +c & 255].join(
      ',',
    )},${opacity})`;
  }
  throw new Error('Bad Hex');
};

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
