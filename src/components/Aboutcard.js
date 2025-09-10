function Aboutcard({ image, room }) {
  return (
    <div className="range-card">
      <div className="range-img">
        <img src={image} alt="range-img" className="image-fluid" />
      </div>
      <h5 className="text-center mx-auto py-2">{room}</h5>
    </div>
  );
}

export default Aboutcard ;
