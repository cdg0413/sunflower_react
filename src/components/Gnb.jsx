const Gnb = ({ nowPage }) => {
  return (
    <nav className="gnb">
      <ul>{nowPage === "menu1" ? <li>Menu1</li> : <li>Menu2</li>}</ul>
    </nav>
  );
};

export default Gnb;
