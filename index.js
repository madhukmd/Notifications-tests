const Notification = (props) => {
  const { img, text, style } = props;
  return (
    <div className={`boxContainer ${style}`}>
      <img src={img} />
      <p className="para">{text}</p>
    </div>
  );
};

const element = (
  <div className="bgContainer">
    <h1 className="heading">Notifications</h1>
    <Notification
      img="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      text="Information Message"
      style="information"
    />
    <Notification
      img="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      text="Success Message"
      style="success"
    />
    <Notification
      img="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      text="Warning Message"
      style="warning"
    />
    <Notification
      img="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      text="danger Message"
      style="danger"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
