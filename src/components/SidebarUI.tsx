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

      <div className="sidebar-footer">
        <h4>Dataset Stats</h4>

        <p>🎮 Games: 5</p>
        <p>📱 Devices: 2</p>
        <p>📊 Records: 1250</p>
      </div>
    </aside>
  );
}

export default SidebarUI;