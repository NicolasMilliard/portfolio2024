const BackgroundVideo = ({ videoPath }: { videoPath: string }) => {
  return (
    <div className="absolute top-0 left-0 -z-20 w-screen h-screen">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src={videoPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
