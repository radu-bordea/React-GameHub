// Function to modify image URLs to include cropping parameters
const getCroppedImageUrl = (url: string) => {
  const target = "media/"; // The target substring to locate in the URL
  const index = url.indexOf(target) + target.length; // Find the position right after "media/"

  // Insert cropping parameters into the URL
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
