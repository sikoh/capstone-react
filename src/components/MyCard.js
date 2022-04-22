function MyCard(props) {
  const { item, title, content, button, destination } = props;

  return (
    <div className="card-container">
        <div className="image-container">
          <img src={item} alt="banner" />
        </div>

        <div className="card-content">
            <div className="card-title">
                <h3>{title}</h3>
            </div>

            <div className="card-body">
              <p>{content}</p>
            </div>
        </div>

        <div className="btn">
            <button>
              <a href={destination}> {button} </a>
            </button>
        </div>

    </div>
  );
}
export default MyCard;
