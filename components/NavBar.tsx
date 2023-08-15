import styles from './../styles/Navbar.module.scss';
const NavBar = () => {
  return (
    <>
      <div>
        <a>logo</a>
      </div>
      <div>
        <ul className={styles.nav}>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
