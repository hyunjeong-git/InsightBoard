function Navbar() {
  return (
    <nav className="home-left-sidebar-container">
      <div>
        <ul>
          <li>Boards</li>
          <li>Templates</li>
          <li>Home</li>
        </ul>
      </div>
      <div>
        <ul>
          <div>Workspaces</div>
          <li>
            <a href="">Trello Workspace</a>
          </li>
          <ul>
            <li>Boards</li>
            <li>Members</li>
            <li>Settings</li>
            <li>Biiling</li>
          </ul>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
