const ImageHelper = ({ product }) => {
  const imageurl = product
    ? product.image
    : `https://images.pexels.com/photos/8730927/pexels-photo-8730927.jpeg?cs=srgb&dl=pexels-lisa-8730927.jpg&fm=jpg`;
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageurl}
        style={{ maxheight: "100%", maxWidth: "100%" }}
        className="mb-3 rounded"
        alt=""
      />
    </div>
  );
};

export default ImageHelper;
