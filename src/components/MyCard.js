function MyCard(props) {
    const { item, title, content, button, destination } = props;
  
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center"
        }}
      >
        <div
          style={{
            border: "gray solid 1px",
            height: "300px"
          }}
        >
          <img src={item} alt="banner" height="70px" width="100%" />
          <h1>{title}</h1>
          <p>{content}</p>
        </div>
  
        <a
          style={{
            padding: "5px",
            backgroundColor: "gray",
            textDecoration: "none",
            borderColor: "#000000",
            color: "white"
          }}
          href={destination}
        >
          {button}
        </a>
      </div>
    );
  }
  export default MyCard;