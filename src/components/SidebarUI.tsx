interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

function SidebarUI({
  currentPage,
  setCurrentPage,
}: SidebarProps) {
  const pages = [
    "Dashboard",
    "Games",
    "Devices",
    "Dataset Info",
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        🎮 Analytics
      </div>

      <nav className="sidebar-nav">
        {pages.map((page) => (
          <button
            key={page}
            className={
              currentPage === page
                ? "sidebar-active"
                : ""
            }
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default SidebarUI;