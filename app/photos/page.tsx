import DownloadButton from "./DownloadButton";

export default function PhotosPage() {
  const images = [
    "https://w.wallhaven.cc/full/4x/wallhaven-4xp21l.jpg",
    "https://w.wallhaven.cc/full/n6/wallhaven-n6m7lq.jpg",
    "https://w.wallhaven.cc/full/6k/wallhaven-6kw32q.jpg",
    "https://w.wallhaven.cc/full/od/wallhaven-odw8e7.jpg",
    "https://w.wallhaven.cc/full/d5/wallhaven-d5k623.jpg",
    "https://w.wallhaven.cc/full/2e/wallhaven-2e95xg.jpg",
    "https://w.wallhaven.cc/full/95/wallhaven-95rrq8.jpg",
    "https://w.wallhaven.cc/full/1k/wallhaven-1kr939.jpg",
    "https://w.wallhaven.cc/full/83/wallhaven-83km1j.jpg",
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-full h-48 mb-2 overflow-hidden">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          <DownloadButton image={image} />
        </div>
      ))}
    </div>
  );
}