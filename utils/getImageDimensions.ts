const getImageDimensions = (imageUrl: string): number[] => {
  const img = new Image();
  img.src = imageUrl;
  return [img.width, img.height];
};

export default getImageDimensions;
