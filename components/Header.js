import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>
        Stay up to date with the latest developments
      </p>
      <style jsx>
        {`
          .title-you-can-use-this-too {
            color: red;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
