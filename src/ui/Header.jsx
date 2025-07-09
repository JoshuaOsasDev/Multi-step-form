function Header({ children }) {
  return (
    <h2 className="font-ubuntu text-primary-blue-950 mt-2 py-3 text-3xl font-extrabold md:mt-0">
      {children}
    </h2>
  );
}

export default Header;
