import NavigationMenu from "./navigationMenu";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        marginTop: "2%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px"
      }}
    >
      <div className="footer-links" style={{ marginLeft: "120px" }}>
        <NavigationMenu />
      </div>
      <div className="copy-right">@Copyright Footer</div>
    </div>
  );
}

export default Footer;