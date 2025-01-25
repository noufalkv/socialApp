export const getFontFamily = (baseFont = 'Inter_18pt', weight = 'regular') => {
  console.log('family', baseFont, 'weight', weight);

  switch (weight) {
    case '100':
      return `${baseFont}-Thin`;
    case 'Regular':
    case '400':
      return `${baseFont}-Regular`;
    case 'bold':
    case '600':
      return `${baseFont}-SemiBold`;
    case '900':
      return `${baseFont}-Bold`;
    case 'Italic':
      return `${baseFont}-Italic`;
    default:
      return `${baseFont}-Black`;
  }
};
