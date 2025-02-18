export default function Layout(props) {
  const { children, setSelectedproduct } = props;
// header
  const header = (
    <header>
      <button
        onClick={() => {
          setSelectedproduct(null);
        }}
      >
        <h1 className="text-gradient">Shop Kwik</h1>
      </button>
    </header>
  );
  //footer
  const footer = (
    <footer>
      <p>
        Site created by{" "}
        <a target="_blank" href="https://github.com/Yeroglif/">
          Yeroglif
        </a>
      </p>
    </footer>
  );
  return (
    <div className="layout">
      {header}
      <main>{children}</main>
      {footer}
    </div>
  );
}
