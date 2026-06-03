interface HeaderUIProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

function HeaderUI({ currentPage, setCurrentPage }: HeaderUIProps) {
  const pages = [
    "Dashboard",
    "Games",
    "Devices",
    "Dataset Info",
  ];

  return (
    <header className="header">
      <h1>🎮 Gaming Battery Analytics</h1>

      <nav>
        {pages.map((page) => (
          <button
            key={page}
            className={currentPage === page ? "active" : ""}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default HeaderUI;